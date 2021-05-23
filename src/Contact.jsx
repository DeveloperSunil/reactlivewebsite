import React, { useState } from 'react';
const Contact = () =>{
    const [data,setData] = useState({
        fullname :"",
        phone:"",
        email:"",
        msg:"",
    });
    const inputEvent = (event) =>{
        const{name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (event) =>{
        event.preventDefault();
        alert(`My name is ${data.fullname}. My Mobile number is ${data.phone}. My email is ${data.email}. My message is ${data.msg}`);
    }
    
    return(
    <>
    <div className="my-5">
        <h1 className="text-center">Contact US</h1> 
    </div>
    <div className="container contact_div"> 
        <div className="row">
             <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                    <input type="text" class="form-control"  name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Name"/>
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone</label>
                    <input type="number" class="form-control"  name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Mobile"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" class="form-control"  name="email" value={data.email} onChange={inputEvent} placeholder="Enter Email"/>
                </div>

                <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea class="form-control"  rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-outline-primary mb-3">Submit</button>
                </div>
                </form>
             </div>
        </div>
    </div>
    </>);
}
export default Contact;