import { useEffect, useState, useRef } from "react";

import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";

import './blog.css';
import Swal from "sweetalert2";

export default function Blog(){


    const [show_modal, setshow_modal]=useState(false);
    const [blogTitle, setBlogTitle]=useState('');
    const [blgContent, setBlogContent]=useState('');

    const blogImage=useRef(null);
    const [blogData, setBlogData]=useState(1);
    const [blogs, setBlogs]=useState([])

    const [showEditModal, setShowEditModal]=useState(false);
    const [editBlogId, setEditBlogId]=useState(false);
    const [blogEditTitle, setBlogEditTitle]=useState('');
    const [blgEditContent, setBlogEditContent]=useState('');
    
    const blogEditImage=useRef(null);


useEffect(()=>{
axios.get('/getAllBlogs')
.then(res=>{
    console.log(res.data);
    setBlogs(res.data.data)
}).catch(err=>{
    alert('something went wrong');
    console.log(err);
})
}, [blogData]);

const removeInputStyle=(element)=>{
    if(element.currentTarget.value===''){
      element.currentTarget.classList.remove('input_style')
    }
  }
  const addInputStyle=(element)=>{
    element.currentTarget.classList.add('input_style');
  }
  
function validateBlog(){
    if(blogTitle.trim()===''){
        alert('title missing')
    }else if(blgContent.trim()===''){
        alert('content missing')
    }else if(blogImage.current.files.length<1){
        alert('image missing missing')
    }else{
        
const formData=new FormData();
formData.append("title",blogTitle);
formData.append("content",blgContent);
formData.append("image",blogImage.current.files[0]);

axios.post('/addBlog', formData)
.then(res=>{
    Swal.fire({
        title:'Blog Added',
        icon:'success',
        timer:1700,
        showConfirmButton:false,
        willClose:()=>{
            setshow_modal(false);
            setBlogTitle('');
            setBlogContent('');
            blogImage.current.value='';
            setBlogData(prevCount=>prevCount+1);  
        }
      });

}).catch(err=>{
    console.log(err);
    alert('something went wrong');

    setshow_modal(false);
    setBlogTitle('');
    setBlogContent('');
    blogImage.current.value='';
    setBlogData(prevCount=>prevCount+1);
})
    }
}



function validateEditBlog(){
    if(blogEditTitle.trim()===''){
        alert('title missing')
    }else if(blgEditContent.trim()===''){
        alert('content missing')
    }else{


const formData=new FormData();
formData.append("id",editBlogId);
formData.append("title",blogEditTitle);
formData.append("content",blgEditContent);
if(blogEditImage){
if(blogEditImage.current.files.length>0){
    formData.append("image", blogEditImage.current.files[0]);
}
}

axios.post('/editBlog', formData)
.then(res=>{
    
    Swal.fire({
        title:'Blog Edited',
        icon:'success',
        timer:1700,
        showConfirmButton:false,
        willClose:()=>{
            setShowEditModal(false);
            setBlogEditTitle('');
            setEditBlogId('');
            setBlogEditContent('');
            if(blogEditImage){
                blogEditImage.current.value='';
            }
            setBlogData(prevCount=>prevCount+1);
        }
      });

   

}).catch(err=>{
    console.log(err);
    alert('something went wrong');

    setShowEditModal(false);
    setBlogEditTitle('');
    setEditBlogId('');
    setBlogEditContent('');
    if(blogEditImage){
        blogEditImage.current.value='';
    }
    setBlogData(prevCount=>prevCount+1);
})
    }
}





return(
    <div>
<div className="container-fluid">
    <div className="row">
<div className="col-12 text-end py-3 pe-3">
    <FaPlus className="fs-2" onClick={()=>{setshow_modal(true)}}/>
</div>

        <div className="col-12">
            <table className="table table-striped">
                <thead className="border border-top">
                <tr>
                    <th>S.No</th>
                    <th>Blog</th>
                    <th>Blog Image</th>
                    <th>Publising Date</th>
                    <th>Actions</th>
                </tr>
                </thead>

<tbody>
    {blogs.map((element, index)=>(
        <tr className="tableContentRows">
               <td>{(index+1)}</td>     
               <td>{element.blog_title}</td>     
               <td><img style={{height:100, width:'auto'}} src={'/'+element.blog_img}/></td>     
               <td>{element.created_at}</td>
               <td>
               <CiEdit className="editDeleteIcon text-info" onClick={()=>{
                setShowEditModal(true);     
                setEditBlogId(element.id);
                setBlogEditTitle(element.blog_title);
                setBlogEditContent(element.blog_content);

               }}/>
               <MdDelete className="ms-4 editDeleteIcon text-danger"/>
               </td>     
        </tr>
    ))}
</tbody>
            </table>
        </div>
    </div>
</div>

<div className={`modal modal-lg ${show_modal ? 'show d-block modal-open' : 'd-none'}`} tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

<div className="modal-body">

    <div className="w-100 text-center fs-4 fw-bold brownBg p-2 text-white">
        ADD BLOG 
        <ImCross className='float_end fs-4 mt-1 me-2' onClick={()=>setshow_modal(!show_modal)}/>
    </div>

<div className='py-4 w-100'>
<div className="form-row">
<input type="text" className="text_input w-100"
value={blogTitle}
onChange={(elem)=>{setBlogTitle(elem.currentTarget.value)}}
onFocus={element=>addInputStyle(element)} 
onBlur={(element=>removeInputStyle(element))}/>
<label className="form-row-field">Blog Title*</label>
</div>
</div>

<div className='py-5 w-100'>
<div className="form-row">
<textarea type="text" className="text_input w-100"
rows={5}
value={blgContent}
onChange={(elem)=>{setBlogContent(elem.currentTarget.value)}}
onFocus={element=>addInputStyle(element)} 
onBlur={(element=>removeInputStyle(element))}>
</textarea>
<label className="form-row-field">Blog Title*</label>
</div>
</div>


<br/>
<br/>



<div className='pt-5 pb-3 w-100'>
<div className="form-row">
  <label for="file-upload" class="form-row-field mb-2">
    Choose Blog Image*
  </label>
  <br/>

  <input id="file-upload" 
  ref={blogImage} 
  type="file" 
  className="mt-2" 
  accept="image/*"/>

</div>
</div>

<div className="text-center mb-2">
<button className="px-3 py-1 brownBg border border-none text-white fs-5" onClick={()=>{validateBlog()}}>Create Blog</button>
</div>

</div>
    </div>
  </div>
</div>


<div className={`modal modal-lg ${showEditModal ? 'show d-block modal-open' : 'd-none'}`} tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">


<div className="modal-body">

<div className="w-100 text-center fs-4 fw-bold brownBg p-2 text-white">
    Edit BLOG 
    <ImCross className='float_end fs-4 mt-1 me-2' onClick={()=>setShowEditModal(false)}/>
</div>

<div className='py-4 w-100'>
<div className="form-row">
<input type="text" className="text_input w-100 input_style"
value={blogEditTitle}
onChange={(elem)=>{setBlogEditTitle(elem.currentTarget.value)}}
onFocus={element=>addInputStyle(element)} 
onBlur={(element=>removeInputStyle(element))}/>
<label className="form-row-field">Blog Title*</label>
</div>
</div>

<div className='py-5 w-100'>
<div className="form-row">
<textarea type="text" className="text_input w-100 input_style"
rows={5}
value={blgEditContent}
onChange={(elem)=>{setBlogEditContent(elem.currentTarget.value)}}
onFocus={element=>addInputStyle(element)} 
onBlur={(element=>removeInputStyle(element))}>
</textarea>
<label className="form-row-field">Blog Title*</label>
</div>
</div>


<br/>
<br/>



<div className='pt-5 pb-3 w-100'>
<div className="form-row">
<label for="file-upload" class="form-row-field mb-2">
Change Blog Image
</label>
<br/>

<input id="file-upload" 
ref={blogEditImage} 
type="file" 
className="mt-2" 
accept="image/*"/>

</div>
</div>

<div className="text-center mb-2">
<button className="px-3 py-1 brownBg border border-none text-white fs-5" onClick={()=>{validateEditBlog()}}>Edit Blog</button>
</div>

</div> 
    </div>
  </div>
</div>
    </div>
)

}








// CREATE TABLE blog_post ( 
//     id INT NOT NULL AUTO_INCREMENT, 
//     blog_title VARCHAR(255), 
//     blog_img VARCHAR(255), 
//     blog_content TEXT, 
//     blog_ctr TEXT, 
//     created_by INT, 
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
//     PRIMARY KEY (id)  -- ,FOREIGN KEY (created_by) REFERENCES user (id) 
//  );
