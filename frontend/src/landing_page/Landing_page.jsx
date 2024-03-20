import React,{useState} from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "../assets/Style/Home.css";
import cloth_Img from "../assets/Images/cloth_img.jpg";
import second_second_img from "../assets/Images/image_3.png";
import count1 from "../assets/Images/Group 40.png"
import count2 from "../assets/Images/Group 41.png"
import count3 from "../assets/Images/Group 42.png"
import importedimg1 from "../assets/Images/image_5.png"
import importedimg2 from "../assets/Images/image_6.png"
import importedimg3 from "../assets/Images/image_7.png"
import importedimg4 from "../assets/Images/image_8.png"
import sellerimg from "../assets/Images/Rectangle 58.png"
import phone_Img from "../assets/Images/phone.png"
import axios from "axios";


// ============================-  sending data in database ===============================



export default function Landing_page() {
  const [formData, setFormData] = useState({name:'',email:'',phone:'',message:''});

  const  handleChange = (e) => {
    const name = e.target.name;
    const  value = e.target.value;
    setFormData({...formData,[name]: value});
  }


  const  submitHandler = (e)=>{
    try {
      axios.post('http://localhost:9090/api/datapost', formData)
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {/* ==============================   section no 1 =============================== */}
      <div className="container-fluid " >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0" id="first_div">
            <div className="mt-5">
              <h1 className="tag_line">
                From Local Cotton<br></br> to Global Imports
              </h1>
              <p className="tag_line mt-4">
                Discover the perfect blend of comfort and style with our
                extensive collection of premium cotton and imported fabrics,
                crafted to elevate your creations. Explore quality, diversity,
                and endless possibilities in every weave.
              </p>
              <div className="shop">
                <button className="btn btn-danger rounded-5">
                  Shop Now<i class="fa-solid fa-bag-shopping px-3"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 p-0">
            <img src={cloth_Img} alt="" className="my_img" />
          </div>
        </div>
      </div>
      {/* ==============================   section no 1  closed here =============================== */}

      {/* ====================================   section no 2 ============================================ */}
      <div className="container-fluid luxury_section">
        <div className="row">
          <div className="col-md-6 py-5 d-flex justify-content-center">
            <img src={second_second_img} alt="" className="imgg" />
          </div>
          <div className="col-md-6 d-flex ">
            <div className="mt-5 secondDiv">
              <h1>
                Dive into Luxury,<br></br>Book your Home Visit
              </h1>
              <p className="mt-4 ">
                Start on a journey of luxury by scheduling a home tour with us.
                Experience the lavish touch of our premium fabrics in the
                comfort of your space. Immerse yourself in luxury as we bring
                the showroom experience directly to your doorstep.
              </p>
              <div className="shop mb-2">
                <button className="btn btn-lg btn-danger rounded-5">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================section 3 count========================================= */}
      <div className="container-fluid " style={{ backgroundColor: '#BD8F6E' }}>
        <div className="row">
          <div className="mt-5 mb-5 col-lg-4 my-3 border-end">
            <div className="text-center">
              <img src={count1} alt="Loading" className="" />
              <div className="" style={{ fontSize: '4em', color: '#EDEAE3', marginBottom: '-23px' }}>10k+</div>
              <div className="" style={{ fontSize: '1.3em', color: '#EDEAE3' }}>Favstore Community</div>
            </div>
          </div>
          <div className="mt-5 mb-5 col-lg-4 my-3 border-end">
            <div className="text-center">
              <img src={count2} alt="Loading" />
              <div className="" style={{ fontSize: '4em', color: '#EDEAE3', marginBottom: '-23px' }}>1760+</div>
              <div className="" style={{ fontSize: '1.3em', color: '#EDEAE3' }}>Happy Customers</div>
            </div>
          </div>
          <div className="mt-5 mb-5 col-lg-4 my-3">
            <div className="text-center">
              <img src={count3} alt="Loading" />
              <div className="" style={{ fontSize: '4em', color: '#EDEAE3', marginBottom: '-23px' }}>38k+</div>
              <div className="" style={{ fontSize: '1.3em', color: '#EDEAE3' }}>Meter Delivered</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================section 3 count closed here ========================================= */}


      {/* ========================================section 4 cards imported products  ========================================= */}




      <div className="container-fluid " style={{ backgroundColor: '#EDEAE3' }}>
        <div className="text-center py-5" style={{color: '#000000' }}> <h1>Imported Fabrics</h1> </div>
        {/* product  Carousel */}
        <Carousel style={{ overflowX: 'auto' }}>
          <Carousel.Item>
            {/* <div className=""> */}
            <div className="row justify-content-center">
              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg1} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2  bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg2} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600'}}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg3} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg4} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <div className=""> */}
            <div className="row justify-content-center">
              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg1} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg2} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg3} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg4} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600'}}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <div className=""> */}
            <div className="row justify-content-center">
              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg1} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg2} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg3} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg4} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center py-2 pb-5" style={{ backgroundColor: '#EDEAE3' }} >
        <button className="btn btn-outline-danger "  > View more <i className="fa-solid fa-angle-right"></i></button>
      </div>
      {/* ========================================section 4 cards imported products closed here ========================================= */}

      {/* ========================================section 5 accordian products  ========================================= */}
      <div className="container-fluid" style={{ backgroundColor: '#EDEAE3' }}>
          <div className="col-lg-12 container text-center"  style={{ color: '#000000' }}> <h1>Why Trade with us?</h1></div>  
        <div className="row" >
         <div className="col-lg-6 " >
            <div className="col-lg-12 mx-5" >
              <Accordion className="mt-5 mx-5" style={{backgroundColor:'#EDEAE3'}}>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Exceptional Quality Fabrics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-4 mx-5" style={{backgroundColor:'#EDEAE3'}}>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Personalized Home Visits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-4 mx-5" style={{backgroundColor:'#EDEAE3'}}>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Virtual Variety Previews</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-4 mx-5" style={{backgroundColor:'#EDEAE3'}}>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Affordable Luxury</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-4 mx-5" style={{backgroundColor:'#EDEAE3'}}>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Worth Every Penny</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={sellerimg} alt="" className="py-2" style={{width:'70%'}} />
          </div>
        </div>
      </div>
      {/* ========================================section 5 accordian imported products closed here ========================================= */}


{/* ========================================section 6 best seller products  ========================================= */}




<div className="container-fluid " style={{ backgroundColor: '#EDEAE3' }}>
        <div className="text-center py-5" style={{ fontSize: '64px', color: '#000000' }}>Our Best Seller</div>
        {/* product  Carousel */}
        <Carousel style={{ overflowX: 'auto' }}>
          <Carousel.Item>
            {/* <div className=""> */}
            <div className="row justify-content-center">
              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg1} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg2} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg3} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg4} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <div className=""> */}
            <div className="row justify-content-center">
              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg1} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg2} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg3} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg4} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <div className=""> */}
            <div className="row justify-content-center">
              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg1} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg2} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg3} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 p-2 bg-white mb-5 mx-4" style={{ borderRadius: '35px', width: '20%' }}>
                <div className="text-center" >
                  <img src={importedimg4} alt="Loading" className="" style={{ width: '98%' }} />
                  <div className="text-start mt-3 px-2" style={{ fontSize: '1.4em', fontWeight: '500' }}>Pink Handwok Bead</div>
                  <div className="text-start  px-2" style={{ fontSize: '1em' }}>Pink Handwok Bead Imported Sequence Thread Embroidery Net Fabric</div>
                  <div className="row mt-4 mb-2 justify-content-center">
                    <div className="col-lg-6 text-start mt-2 " style={{ fontSize: '18px',fontWeight:'600' }}>₹700 /Mtr</div>
                    <button className="col-lg-6 btn btn-lg btn-danger rounded-5" style={{ fontSize: '14px', width: '40%' }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center py-2 pb-5" style={{ backgroundColor: '#EDEAE3' }} >
        <button className="btn btn-outline-danger "  > View more <i className="fa-solid fa-angle-right"></i></button>
      </div>
      {/* ========================================section 6 best seller products closed here ========================================= */}



      {/* ========================================section 7 contact form closed here ========================================= */}


<div className="container-fluid" style={{ backgroundColor: '#EDEAE3' }}>
  <div className="row">
    {/* ====================================== message section ========================= */}
  <div className="col-lg-6 py-5 form_section">
<h1>We'd Love to hear<br/> from you!</h1>
<p>Experince the luxury of quality fabric though our appointment <br/>
feature, where you can feel and touch each textile, ensuring <br/>satasfaction.</p>
<div class="">
  <img src={phone_Img} alt="" class="img-fluid  " />
</div>
  </div>

  {/* ==========================  form section ======================================= */}
  <div className="col-lg-6 py-3">
    <div className="col-lg-10 border border-1 border-dark border-2 rounded-4 py-5 px-4">
  <form>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">
      Your Name
    </label> */}
    <input type="text" onChange={handleChange} placeholder="Your Name" name="name" className="form-control border-dark border-1"  aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">
    Email
    </label> */}
    <input type="email" onChange={handleChange} className="form-control border-dark border-1" name="email" placeholder="Email" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">
    Phone No
    </label> */}
    <input type="text" onChange={handleChange}  className="form-control border-dark border-1" name="phone" placeholder="phone" id="exampleInputPassword1"/>
  </div>

  <div class="form">
  <textarea class="form-control border-dark border-1" onChange={handleChange} rows={4} name="message" placeholder="your message" id="floatingTextarea"></textarea>
</div>
  
  <div className="col-lg-12 d-flex justify-content-end mt-5">
  <button type="submit" className="btn btn-danger rounded-5" onClick={submitHandler}>
    Submit
  </button>
  </div>
</form>

  </div>
  </div>
  </div>
</div>

      {/* ========================================section 7 contact form   closed here ========================================= */}


      {/* ========================================section 8 faqs closed here ========================================= */}
      <div className="container-fluid " style={{ backgroundColor: '#EDEAE3' }}>
          <div className="container text-center"  style={{ fontSize: '64px', color: '#000000' }}>Commonly Asked Questions</div>  
        <div className="row justify-content-center" >
            <div className="col-lg-10  mb-5" >
              <Accordion className="mt-5 mx-5" >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Exceptional Quality Fabrics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-3 mx-5" >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Personalized Home Visits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-3 mx-5" >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Virtual Variety Previews</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-3 mx-5" >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Affordable Luxury</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mt-3 mx-5" >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Worth Every Penny</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      {/* ========================================section 8 faqs   closed here ========================================= */}

    </>
  );
}
