import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './index.css';

import Footer from "../footer";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Roadmap from "./Roadmap";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import register from "../assets/img/register.jpg"
export default function Registration(){
const [Inputs, setInputs] = useState({username:"",email:"",message:""})
const handleChnage = e =>{
  e.persist();
setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
}
 
const sendMessage = async (e)=>{
  e.preventDefault()
  const res = await axios.post("http://localhost:8000/contactemail",Inputs)
  console.log(res)
  if (res.data==="Message sent successfully"){
    swal("Well done!", "Message sent successfully", "success");
    Inputs.username="";
    Inputs.email="";
    Inputs.message="";
  }
  
}

    return(
        <>
    <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/contactus">Registrations</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/registration" className='active'>Registration</Link></span>
            </div>
            </div>
        </div>
    </section>
    <section className="popular-course-section">
              <div className="container">
              <Slide top>  <h2 className="text-center22">Register your Course</h2></Slide>
             <div className="row">
                <div className="col-md-6">
                <p>Follow the steps below to get your course registered</p>
               <ul className="Det">
               <Fade bottom>
               <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To <strong>Register</strong> send an Email to hr@atti-mbombela.co.za</p>
                                          
                                  </div>
                              </li>
               <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Make sure you have applied for the course you want to register, you can apply here <Link to="/admission">Apply Now</Link></p>
                                          
                                  </div>
                              </li>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>For more help send an email to reception@atti-mbombela.co.za</p>
                                          
                                  </div>
                              </li>
                              </Fade>
                              </ul>
   
                </div>

                <div className="col-md-6 ReImage">
                  <Zoom>
                  <img src={register} alt="" />
                  </Zoom>
                </div>
             </div>
              

            </div>
    </section>

        <Footer/>
        </>

    )
}