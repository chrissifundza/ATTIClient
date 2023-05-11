import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import { Accordion } from "./Accordian";
import { data } from "./data";
import "./faq.css";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
export default function FAQ(){
    return(
        <>
           <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/contactus">Frequently Asked Questions</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/faq" className='active'>FAQ</Link></span>
            </div>
            </div>
        </div>
     
     
    </section>

    
<section className="main-content">
  <div className="container">
  <Slide bottom><h2  className="text-center faqTitle mb-5">Frequently Asked Questions</h2></Slide>
    <br/>
    <br/>
 <div className="row faq-cnt">
 {data.map((section, index) => (
         <Fade bottom><Accordion key={index} section={section} /></Fade> 
        ))}
 </div>
   
  </div>
</section>
<Footer/>
        </>
    )
}