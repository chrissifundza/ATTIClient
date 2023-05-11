import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './index.css';
import Footer from "../footer";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Roadmap from "./Roadmap";
import Banner from "./banner";
import pros from '../assets/img/course/prosIcon.png'
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Registration(){
    const history = useHistory()
const [Inputs, setInputs] = useState({username:"",email:"",message:""})
const prospectus='https://firebasestorage.googleapis.com/v0/b/atti-e4de8.appspot.com/o/atti-prospectus%2FATTI%20PROSPECTUS%202023.1.pdf?alt=media&token=1f476f73-424c-4385-b3f5-5ee474c8ee84'

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
console.log(Inputs)
const ApplicationP =()=>{
    history.push("/applicationprocess")
}
    return(
        <>
    <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/contactus">Admissions</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/admission" className='active'>Admission</Link></span>
            </div>
            </div>
        </div>
    </section>
    <section className="popular-course-section">
        <div className="container">
            <div className="row ">
            <Slide top>  <h2 className="text-center22"><i className="fa fa-graduation-cap" aria-hidden="true"></i> Apply to Study with us</h2></Slide>  
               
            </div>
            <div className="row">
              <Zoom >
            <div className="col-md-6">
              
          <Banner/>
          </div>
          </Zoom>
            <div className="col-md-6">
          <div className="container prospART">
      
     
      <ul className="Det">
                             <Fade bottom>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p> <a href={prospectus} target="_blank"><img src={pros} alt="" /> <span>Download Prospectus</span></a></p>
                                          
                                  </div>
                              </li>
                              </Fade>
                              <Fade bottom>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To know how to apply Read the steps below.</p>
                                          
                                  </div>
                              </li>
                              </Fade>
                              <Fade bottom>
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
                              <Fade bottom>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Alternatively send a message via our contact page, a consultant will contact you within 24hrs.</p>
                                          
                                  </div>
                              </li>
                              </Fade>

                              <Fade bottom>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p className="straightApplyNow"><span >If Ready, click </span> <Link to="/applicationprocess">Apply Online Now.</Link></p>
                                          
                                  </div>
                              </li>
                              </Fade>
                              </ul>
    </div>
          </div>
            
         
            </div>
         
      
        </div>
       </section>
       <section className="popular-course-section hwtyuATTI">
              <div className="container hwtapply">
                
              <Roadmap />
               
   

            </div>
            <div className="container" style={{marginTop:"-100px"}}>
            <div className="apply-now-button">
                 
               <Zoom>   <button className='btn applynow'  onClick={ApplicationP}>Apply online now</button></Zoom>
                </div>
            </div>
    </section>

        <Footer/>
        </>

    )
}