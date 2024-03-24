const express = require("express");
const app = express();
const route = express.Router();
const connection = require('../db/connection');
const multer = require('multer');


const nodemailer=require('nodemailer');//to be installed
const bcrypt=require('bcryptjs');//to be installed


// =============SESSION====================


const session=require('express-session')
route.use(session({
    secret: '#######SES#####KEY########',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: 'strict',
    }
}));




//=================nodemailer transport=========================
let mailTransport=nodemailer.createTransport({
  service:'gmail',
  host:'smtp.gmail.com',
  port:587,
  secure:true,
  auth:{
      user:'',
      pass:''
  }
});


let otpMailOptions={
  from:{
      name:'Sign Up OTP',
      address:process.env.GMAIL_USER
  },
  to:'',
  subject:'OTP For SignUp',
  text:''
}


function generateRandomValue(){
  let random_source1=new Date().getMilliseconds().toString();
  let random_source2=Math.random().toString();
  let random_source3=new Date().getSeconds().toString();
  let random_source4=Math.floor((Math.random() * 100) + 1).toString();
  let split_random=random_source2.split('.')[1];
  let dig1=split_random[Math.floor(split_random.length/2)];
  let dig2=random_source1[random_source1.length-1];
  let dig3=split_random[split_random.length-1];
  let dig4=random_source4[random_source4.length-1];
  let dig5=random_source3[random_source3.length-1];
  let dig6=split_random[0];

  return `${dig1}${dig2}${dig3}${dig4}${dig5}${dig6}`

}







// =======================  route get api =========================================
route.get("/", (req, res) => {
  try {
    res.send("200");
  } catch (error) {
    console.log(error);
  }
});

// ============================  API FOR USER QUERY ==============================================

route.post("/api/datapost", async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;

    let query = `INSERT INTO QUERY_MASTER (NAME,EMAIL,PHONE,MESSAGE) VALUE ('${name}','${email}','${phone}','${message}')`;

    connection.query(function (err, result) {
      if (!err) {
        res.json({ msg: "data post success" });
      } else {
        res.json({ msg: "something went wrong" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});




// ===========================================SIGN UP=====================================


route.post('/send_email_otp', async(req,res)=>{
  try{

console.log(req.session)

if(req.session.signUpTries){
  delete req.session.signUpOtp;
  delete req.session.signUpEmail;
  delete req.session.signUpTries;
}

let emailId=req.body.emailId;
let mobileNum=req.body.mobileNum;


let user_count=await new Promise((resolve, reject)=>{
  connection.query(`SELECT id FROM user WHERE email=? OR phone=?`,[emailId, mobileNum], (err, res)=>{
      if(err) reject(err);
      resolve(res);
  } )
})

if(user_count.length>0){
  res.status(409).send('409')

}else{
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(emailRegex.test(emailId)){

let otp=generateRandomValue();

console.log(otp);

let local_mail_option=otpMailOptions;
local_mail_option.to=emailId.trim();
local_mail_option.text=`${otp} is your SignUp OTP`;


// await new Promise((resolve, reject)=>{
// mailTransport.sendMail(local_mail_option, (error, info)=>{
//   if(error) reject(error);
//   resolve(info);
// });
// });

req.session.signUpOtp=otp;
req.session.signUpEmail=emailId;


console.log(req.session)

res.status(200).send('200');

  }else{
      res.status(421)
  }
}

}catch(err){
  console.log(err);
  res.status(400).send('something went wrong');
  }
})

route.post('/confirm_otp', async(req,res)=>{
  try{

      let clientEmail=req.body.emailId;
      let clientOtp=req.body.otp;

      console.log(req.session)

if(req.session.signUpOtp==clientOtp && req.session.signUpEmail==clientEmail){
res.status(200).send('200');

}else{
  if(req.session.signUpTries==undefined){
      req.session.signUpTries='true';
      res.status(200).send('201');
  }else{
      res.status(401).send('401');
  }
}

  }catch(err){
      console.log(err)
      res.status(400).send('something went wrong');
  }
});

route.post('/final_user_signup', async(req,res)=>{
  try{

let {firstName, lastName, mobileNum, emailId, password, confirmPassword, houseNo, street, city, pincode }=req.body;

let strong = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:,<.>])[a-zA-Z0-9!@#$%^&*()-_=+{};:,<.>]+$/;
if(confirmPassword===password){
  if(strong.test(password)){

  bcrypt.hash(password, 10, async(err, hash) => {
      if (err){res.status(401).send('401');
      }else{

      connection.query(`INSERT INTO user(first_name, last_name, email, phone, password, house_no, street_no, city, pincode) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, emailId, mobileNum, hash, houseNo, street, city, pincode], (err1,res1)=>{
          if(err1) throw err1;
      res.status(200).send('200');
      })

      // res.status(200).send('200');
  }
  });

  }else{
  res.status(100).send('100')
  }
}else{
  res.status(100).send('100')
}


  }catch(err){
      console.log(err);
      res.status(400).send('something went wrong');
  }
});























let storage1= multer.diskStorage({
  destination: (req, file, cb) => {
      if(file){
          cb(null, './../frontend/public');
      }},
  filename:(req,file,cb)=>{
if(file){
  cb(null, file.fieldname.replaceAll(' ','')+Date.now()+generateRandomValue()+file.originalname.replaceAll(' ',''));
}
  }
});

const upload = multer({ storage: storage1 });



  
route.post('/addBlog', upload.single('image'), (req, res) => {
  try{

    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    const {title,content}=req.body;
    connection.query(`INSERT INTO blog_post(blog_title, blog_content, blog_img, created_by) VALUES(?, ?, ?, ?)`, [title, content, req.file.filename, ''], (err1, res1)=>{
      if(err1) throw err1;
      res.status(200).json({success:true,
      msg:'Blog Added'});
    })

  }catch(err){
    console.log(err);
    return res.status(400).send('something went wrong');
  }
});


route.post('/editBlog', upload.single('image'), (req, res) => {
  try{
    const {id, title,content}=req.body;

    let query=`UPDATE blog_post SET blog_title=?, blog_content=? WHERE id=?`;
    let dataArray=[title, content, id];
    
    if (req.file) {
      query=`UPDATE blog_post SET blog_title=?, blog_content=?, blog_img=? WHERE id=?`;
      dataArray=[title, content, req.file.filename, id];
    }

    connection.query(query, dataArray, (err1, res1)=>{
      if(err1) throw err1;
      res.status(200).json({success:true,
      msg:'Blog Added'});
    })

  }catch(err){
    console.log(err);
    return res.status(400).send('something went wrong');
  }
});




route.get('/getAllBlogs', async(req,res)=>{
  try{
    
    connection.query(`SELECT id, blog_title, blog_content, blog_img, DATE_FORMAT(created_at, '%d-%m-%Y %H:%i:%s') AS created_at FROM blog_post ORDER BY id DESC`, (err1,res1)=>{
      if(err1) throw err1;
      res.status(200).json({success:true, data:res1});
    })

  }catch(err){
console.log(err);
res.status(400).send('something went wrong')
  }
})




module.exports = route;
