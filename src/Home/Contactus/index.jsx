import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './contactUs.css';
import facebook from "../assets/img/course/facilitators/fb.jpg"
import twitter from "../assets/img/course/facilitators/t.jpg"
import lindkedin from "../assets/img/course/facilitators/l.jpg"
import youtube from "../assets/img/course/facilitators/y.jpg"
import whatsapp from "../assets/img/course/facilitators/whatsapp.png"
import think from "../assets/img/course/think.png"
import Footer from "../footer";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
export default function ContactUs(){
const [Inputs, setInputs] = useState({username:"",email:"",cellphone:"",message:""})
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
    return(
        <>
    <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/contactus">Contact Us</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/contactus" className='active'>ContactUs</Link></span>
            </div>
            </div>
        </div>
    </section>
    <section className="popular-course-section">
              <div className="container">
                <div className="topInfoContact row">
                <div className="col-md-6">
               <Slide top> <h2 style={{textAlign:"left !important"}} className=" ndcont">How Can We help you?</h2></Slide>
              <Slide bottom><p>Contact us on the following contact details</p></Slide>  
              <Slide bottom> <p><strong>Location: 16 Rothery St, Mbombela, 1200</strong></p></Slide> 
                </div>
                <div className="col-md-6 text-right">
                <div className="think">
                  <Zoom> <img src={think} alt="" /></Zoom>
                   
                </div>
                </div>
                </div>
              
                <table class="table table-bordered  table-hover border">
                <Zoom bottom>
  <thead>
    
    <tr>
    
      <th style={{fontWeight:"bold"}} scope="col">Position</th>
      <th style={{fontWeight:"bold"}} scope="col">Contact details</th>
      <th style={{fontWeight:"bold"}} scope="col">Type of Enquiry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td>Reception</td>
      <td>reception@atti-mbombela.co.za</td>
      <td>For General, Admission, Registration</td>
    </tr>
    <tr>
    
      <td>Corperate</td>
      <td>corporate@atti-mbombela.co.za</td>
      <td>For Business, Partnering </td>
    </tr>
  
  </tbody>
  </Zoom>
</table>

<div className="row ">
<div className=" col-md-6 socialmediainstructor">
<Fade bottom><h4>Send us a message on Whatsapp</h4></Fade>
       <Fade bottom>
        <div className="soc">

                        <div className="icons">
                            <img src={whatsapp} alt="" />
                        </div>
                        <div className="iconNumber">
                            <p>Mobile: 082 222 3563</p>
                        </div>
                       
            </div>
            </Fade>
         </div> 

<div className="col-md-6 socialmediainstructor">
<Fade bottom><h4>Other Social Media Accounts</h4></Fade>
        <Fade bottom>
        <div className="soc">

                        <div className="icons">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="icons">
                            <img src={twitter} alt="" />
                        </div>
                        <div className="icons">
                            <img src={lindkedin} alt="" />
                        </div>
                        <div className="icons">
                            <img src={youtube} alt="" />
                        </div>
            </div>
            </Fade>
         </div> 
    </div>
</div>
    </section>

    <div className="contact-us">
			<div className="info1">
        <Fade bottom>
				<h2>Send a Direct Message</h2></Fade>
				<form  className="form" id="form20">
					<Fade bottom>
          <input
						type="text"
						id="name-form"
            name="username"
						placeholder="Name"
            onChange={handleChnage}
            value={Inputs.username}
					/></Fade><br />
          <Fade bottom>
					<input
						type="text"
            name="email"
						id="email-form"
            value={Inputs.email}
            onChange={handleChnage}
						placeholder="Email"
					/></Fade><br />
           <Fade bottom>
					<input
						type="text"
            name="cellphone"
						id="email-form"
            value={Inputs.email}
            onChange={handleChnage}
						placeholder="Cellphone"
					/></Fade><br />
          <Fade bottom>
					<textarea
						name="message"
						id="message-form"
						cols="30"
            onChange={handleChnage}
            value={Inputs.message}
						rows="3"
						placeholder="Type Your Message"
					></textarea></Fade><br />
          <Fade bottom>
					<button onClick={sendMessage} id="sent">Submit Message</button> </Fade>
				</form>
			</div>
			<div className="map">
        <Fade bottom>
				<h2>Where You Can Find Us</h2></Fade>
        <Fade bottom>	<p>
          
					<i className="fas fa-map-marker-alt"></i> 16 Rothery Street,
					Mbombela, 1200
				</p> </Fade>

				<div className="google-maps">
					<Slide bottom>
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1681471596223!6m8!1m7!1shVeVmsnLUlBFW-FqQUxLBg!2m2!1d-25.47695273362903!2d30.97794652367518!3f269.8002!4f0!5f0.7820865974627469" width={120}
						height={300}
						style={{border: 0}}
						allowFullscreen="" allowfullscreen="" loading="lazy" ></iframe></Slide>
				</div>
			</div>
		</div>
        <Footer/>
        </>

    )
}