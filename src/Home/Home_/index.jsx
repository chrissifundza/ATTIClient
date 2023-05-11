
import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import VideoBG from '../assets/video/bg.mp4'
//slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Submit,ICON_1,ICON_2,ICON_3,USER,USER_1,USER_2,USER_3,USER_4,USER_6,USER_7,USER_8,USER_15,USER_9,USER_11,USER_12,
    USER_13,IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_6,IMG_7,IMG_8,COURSE1, COURSE2, COURSE3, COURSE4, COURSE,COURSE_1,COURSE_2,COURSE_3,COURSE_4,COURSE_5,COURSE_7,COURSE_8,COURSE_9,COURSE_10,COURSE_11,COURSE_12,COURSE_13,COURSE_14,COURSE_15,BLOG_01,BLOG_02,BLOG_03,BLOG_04} from '../../constant/imagepath_home';
import { Link, withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { ContextData } from '../../context/ContextData';
import SingleCategory from './singleCategory';
import Accrediatation from './accreditation';
import pearson from '../assets/img/course/pea3.jpg'
import applied from '../assets/img/course/applied.jpg'
import ready from '../assets/img/course/ready.gif'
import pen from '../assets/img/course/pen.png'
import LightSpeed from 'react-reveal/LightSpeed';
import { Reveal } from './reveal';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
function Home()  {
  const [CC, setCC] = useState([])
  const [timerDays, settimerDays] = useState('00');
  const [timerHours, settimerHours] = useState('00');
  const [timerMinutes, settimerMinutes] = useState('00')
  const [timerSeconds, settimerSeconds] = useState('00');
  const prospectus='https://firebasestorage.googleapis.com/v0/b/atti-e4de8.appspot.com/o/atti-prospectus%2FATTI%20PROSPECTUS%202023.1.pdf?alt=media&token=1f476f73-424c-4385-b3f5-5ee474c8ee84'
  let interval = useRef()
const startTimer = ()=>{
  const countDown = new Date('May 12, 2023 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60 )) / 1000)

      if (distance < 0){
          clearInterval(interval.current)
      } else{
        settimerDays(days)
        settimerHours(hours)
        settimerMinutes(minutes)
        settimerSeconds(seconds)
      }
    }, 1000);
  
}

useEffect(()=>{
  startTimer();
  return () => {
    clearInterval(interval.current)
  }
},[])
  const history = useHistory()
    function searchmentee() {
      
      history.push("/app/Mentee/search")
    }
    const {Categories,AllCourses} = useContext(ContextData)
   
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: '10px',
        arrows: false,
        centerMode: true,
    };

    useEffect(()=>{
      if(AllCourses!="") {
       
     
      
      }
      
      
    },[AllCourses])  
  
    const ApplicationP =()=>{
      history.push("/applicationprocess")
  }
  const Register =()=>{
    history.push("/registration")
  }
    
      return ( 
      <div>
        {/* Banner */}
        <section className="banner-section">
          <video src={VideoBG} autoPlay={true} loop  >
           
            </video>
          <div className="container">
            <div className="banner-content text-center">
              <div className="banner-heading">
                <h2><Typewriter 
                
                onInit={(typewriter) => {
                   
                  typewriter.typeString('Study Fulltime Courses')
                  .pauseFor(5000)
                  .deleteChars(22)
                
                  typewriter.typeString('Learn Today, Lead Tomorrow')
                    .pauseFor(5000)
                    .start();
                }}
                options={{
                  autoStart:true,
                  loop:true,
                  delay:150,
                  pauseFor:3000,
                 
                }}
                /></h2>
              <Fade >  <p>Own your future learning new skills today</p></Fade>
              </div>
              <div className="banner-forms">
                <form className="banner-form">
                  <div className="input-group-form form-style form-br col-md-3 col-12"> <i className="fas fa-map-marker-alt text-warning" />
                    <input disabled className="input-style-form" type="text" placeholder="Learn Today" name="going" />
                  </div>
                  <div className="input-group-form form-style col-md-6 col-12"> 
                    <input disabled className="input-style-form" type="text" placeholder="Apply to ATTI and Start Your Training" name="going" />
                  </div>
                  <button className="btn button-form col-md-3 col-12" onClick={()=>searchmentee} type="button">Apply Now</button>
                </form>
              </div>
            </div>
            <div className="banner-footer">
              <div className="banner-details">
                <div>
                <Fade left>
                  <div className="banner-card d-flex align-items-center">
                    <div className="banner-count">
                      <h2>{Categories.length <10 ? "0"+Categories.length:Categories.length}</h2>
                    </div>
                    <div className="banner-contents">
                      <h2>Certified Accreditation</h2>
                      <a href="#">See all Accredidatin <i className="fas fa-caret-right right-nav-white" /></a>
                    </div>
                  </div>
                  </Fade>
                </div> 
                <div>
                <Fade bottom>
                  <div className="banner-card d-flex align-items-center">
                    <div className="banner-count">
                      <h2>26</h2>
                    </div>
                    <div className="banner-contents">
                      <h2>Program Courses</h2>
                      <Link to="/courses">See all Courses <i className="fas fa-caret-right right-nav-white" /></Link>
                    </div>
                  </div>
                  </Fade>
                </div>
                <div>
                <Fade right>
                  <div className="banner-card d-flex align-items-center">
                    <div className="banner-count">
                      <h2>7K</h2>
                    </div>
                    <div className="banner-contents">
                      <h2>Students Globally</h2>
                      <a href="#">Contact us <i className="fas fa-caret-right right-nav-white" /></a>
                    </div>
                  </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Banner */}
        {/* All Courses */}
        <section className="allcourse-section bg-grey">
          <div className="container">
            <div className='title'> <h3>Course Categories</h3> <div className='line'></div></div>
            
            <div className="row">

           
              {AllCourses!==""?Categories.map((cat, index)=>{
               
               
                return(<SingleCategory key={cat.CourseAccre} index={index}  cat={cat}/>)}):""}
{/*               
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <Link to="courses/Microsoft Imagine Academy">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_3} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">Microsoft Imagine Academy</h4>
                    <p>Over <span className="text-warning">4</span> Courses</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
              <Link to="courses/CompTIA">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_1} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">CompTIA</h4>
                    <p>Over <span className="text-warning">5</span> Courses</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
              <Link to="courses/International Certificate for Business">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_2} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">International Certificate for Business</h4>
                    <p>Over <span className="text-warning">3</span> Courses</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
              <Link to="courses/MICTSETA">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_7} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">MICTSETA</h4>
                    <p>Over <span className="text-warning">8</span> Courses</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
              <Link to="courses/QCTO">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_4} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">QCTO</h4>
                    <p>Over <span className="text-warning">1</span> Course</p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
              <Link to="courses/Services SETA">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_5} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">Services Seta</h4>
                    <p>Over <span className="text-warning">1</span> Course</p>
                  </div>
                </div>
                </Link>
              </div> */}
              
              <div className="section-btn m-auto">
              <Reveal>
               <Link to='/courses'> <button className="btn btn-course">View all Courses <i className="fas fa-caret-right right-nav-white" /></button></Link>
               </Reveal>
              </div>
             
            </div>
          </div>
        </section>
        {/* /All Courses */}
        <section className="popular-course-section">
              <div className="container abtRTYU">
             
            
             
                <div className="row myRowAbt">
                  
                  <div className="pen">
                    
                      <img src={pen} alt="" />
                  </div>
                  <div className=" col-md-3 ab-circle1">
                  <Zoom>
                    <div className="ab-circle">

                    </div>
                    </Zoom>
                  </div>
                  <div className="col-md-6 imageabout" ><Zoom><img src={pearson} alt="" /></Zoom></div>
                  <Zoom>
                  <div className="col-4 col-md-4 ab-message">
                    <Reveal><h1>How To Apply  </h1></Reveal> 
                     <ul>
                     <Reveal>
                     <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>View all courses ontop.</div> 
                      </li>
                      </Reveal>

                      <Reveal>
                      <li>
                    <i className="fa fa-check" aria-hidden="true"></i> <div>Or Download a full <a href={prospectus} target="_blank">Prospectus.pdf.</a></div> 
                      </li>
                      </Reveal>
                      <Reveal>
                      <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>Select the course you want to enroll in.</div> 
                      </li>
                      </Reveal>
                      <Reveal>
                      <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>Check for minimun Entry Requirement</div>
                      </li>
                      </Reveal>

                      <Reveal>
                      <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>Prepare needed documents e.g ID, school results e.t.c</div>
                      </li>
                      </Reveal>
                     </ul>
                     <Reveal>
                   <Link to="/admission"> <button className='readMore'>Read more</button></Link></Reveal>
                     </div>
                     </Zoom>
                 
                  
                </div>
                <div className="apply-now-button">
                <Zoom>
                  <img src={ready} alt="" />
                  </Zoom>
              <Zoom>
               <button className='btn applynow'onClick={ApplicationP}>Apply online now</button>
              </Zoom> 
                </div>
              </div>
            </section>
        {/* <section className="popular-course-section">
              <div className="container">
             
            
             
                <div className="row myRowAbt">
                  
                  <div className="pen">
                    
                      <img src={pen} alt="" />
                  </div>
                
                  <Zoom>
                  <div className="col-4  ab-message">
                    <Reveal><h1>How To Apply  </h1></Reveal> 
                     <ul>
                     <Reveal>
                     <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>View all courses ontop.</div> 
                      </li>
                      </Reveal>

                      <Reveal>
                      <li>
                    <i className="fa fa-check" aria-hidden="true"></i> <div>Or Download a full <a href={prospectus} target="_blank">Prospectus.pdf.</a></div> 
                      </li>
                      </Reveal>
                      <Reveal>
                      <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>Select the course you want to enroll in.</div> 
                      </li>
                      </Reveal>
                      <Reveal>
                      <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>Check for minimun Entry Requirement</div>
                      </li>
                      </Reveal>

                      <Reveal>
                      <li>
                      <i className="fa fa-check" aria-hidden="true"></i> <div>Prepare needed documents e.g ID, school results e.t.c</div>
                      </li>
                      </Reveal>
                     </ul>
                     <Reveal>
                   <Link to="/admission"> <button className='readMore'>Read more</button></Link></Reveal>
                     </div>
                     </Zoom>
                  <div className="col-7 col-md-7 imageabout" ><Zoom><img src={pearson} alt="" /></Zoom></div>
                  <div className="col-3 col-md-3 ">
                  <Zoom>
                    <div className="ab-circle">

                    </div>
                    </Zoom>
                  </div>
                </div>
                <div className="apply-now-button">
                <Zoom>
                  <img src={ready} alt="" />
                  </Zoom>
              <Zoom>
               <button className='btn applynow'onClick={ApplicationP}>Apply online now</button>
              </Zoom> 
                </div>
              </div>
            </section> */}
       
      <div class="fixed-background">
      <section className="training-section1">
          <div className="container text-center">
            <div className="row text-centerDD">
              <LightSpeed  left>
            <h3 className='' style={{color:"#ffffff",fontWeight:"bold", textAlign:"center"}}>
          👋🏻 Dont hesitate to contact our support team,  We will gladly help you 
					</h3>
          </LightSpeed>
          <LightSpeed  right>
					<h3
						className="py-4"
            style={{color:"#ffffff",textAlign:"center"}}
					>
						<i className="fa fa-envelope" aria-hidden="true"></i> reception@atti-mbombela.co.za
					</h3></LightSpeed>
              </div>
          </div>
              </section>
			
				
          

			<div className="fixed-wrap">
				<div className="fixed"></div>
			</div>
		</div>
          
            <section className="popular-course-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,224L1440,96L1440,0L0,0Z"></path></svg>
        
              <div className="container backHelp">
              <div className="row content">
              <Rotate top left>
              <div className="col-6 col-md-6 img2">
                <img src={applied} alt="" />
                
              </div>
            </Rotate>
              <div className="col-6 col-md-6 info">
                <h1><Reveal>Already applied?</Reveal></h1>
                <ul>
                  
                  <li>
                  <Reveal> click the link below to register your course</Reveal>
                  </li>
                </ul>
                <Reveal> <button className='readMore'onClick={Register}>Register here</button></Reveal>

                <p><Reveal>You need help with registration please send an email to registration@atti-mbombela.co.za</Reveal></p>
              </div>
              <div className="col-12 info2 info">
                <h1><Reveal>Already applied?</Reveal></h1>
                <ul>
                  
                  <li>
                  <Reveal> click the link below to register your course</Reveal>
                  </li>
                </ul>
                <Reveal> <button className='readMore' onClick={Register}>Register here</button></Reveal>

                <p><Reveal>You need help with registration please send an email to registration@atti-mbombela.co.za</Reveal></p>
              </div>
              </div>
                </div>
                
                </section> 

                <div class="fixed-background1">
                <section className="training-section">
                  
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="training-desc">
                <Zoom left> <h2>Register for Contact Centre Operations Course R250 <strong>85% discount</strong></h2></Zoom> 
                <Zoom left> <p className="text-white mb-4">Get course that you need to improve your skills. Our experts are ready to help. Change your life through learning. Over 26 courses.</p></Zoom> 
                <Zoom bottom>  <button className="btn btn-main">Find More <i className="fas fa-caret-right right-nav-secondary" /></button> </Zoom>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="training-count text-center">
                <Zoom right>  <p className="text-white">Time is running out</p></Zoom>
                  <div className="training-counter">
                    <Zoom bottom>
                    <div className="counters text-center">
                      <div>
                        <p>{timerDays}</p>
                      </div>
                    <Zoom bottom>  <p>Days</p></Zoom>  
                    </div>
                    </Zoom>
                    <Zoom bottom>
                    <div className="counters text-center">
                      <div>
                        <p>{timerHours}</p>
                      </div>
                   <Zoom bottom>  <p>Hours</p></Zoom>  
                    </div>
                    </Zoom>
                    <Zoom bottom>
                    <div className="counters text-center">
                      <div>
                        <p>{timerMinutes}</p>
                      </div>
                   <Zoom bottom> <p>Minutes</p></Zoom>  
                    </div>
                    </Zoom>
                    <Zoom bottom>
                    <div className="counters text-center">
                      <div>
                        <p>{timerSeconds}</p>
                      </div>
                    <Zoom bottom> <p>Seconds</p></Zoom> 
                    </div>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
			<div className="fixed-wrap">
				<div className="fixed1"></div>
			</div>
		</div>
         
        
        {/* Popular Courses 
        <section className="popular-course-section">
          <div className="container">
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
                <h2><span className="text-weight">Popular</span> Courses <span className="header-right" /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div> 
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_8} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_1} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Hinata Hyuga</p>
                      <h4 className="mb-0">Introduction Learn – LMS plugin</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 85</li>
                        <li><i className="far fa-file-alt mr-1" />5</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$200</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_9} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_8} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Keny White</p>
                      <h4 className="mb-0">From Zero to Hero with Nodejs</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 125</li>
                        <li><i className="far fa-file-alt mr-1" />3</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$380</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_10} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_2} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">John Paul</p>
                      <h4 className="mb-0">Learn Python – Interactive Tutorial</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 122</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$100</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_11} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_3} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Antony Noel</p>
                      <h4 className="mb-0">Your Guide to Photography</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 320</li>
                        <li><i className="far fa-file-alt mr-1" />8</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$600</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_12} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Hinata Hyuga</p>
                      <h4 className="mb-0">Become a PHP Master and Expertise</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 215</li>
                        <li><i className="far fa-file-alt mr-1" />3</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$350</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_13} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_8} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Keny White</p>
                      <h4 className="mb-0">Learning jQuery Mobile for Beginners</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 128</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$125</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_14} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_2} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">John Paul</p>
                      <h4 className="mb-0">The Art of Black and White Photography</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 354</li>
                        <li><i className="far fa-file-alt mr-1" />8</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$620</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_15} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_3} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Antony Noel</p>
                      <h4 className="mb-0">HTML5/CSS3 Essentials in 4-Hours</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 200</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$400</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-btn m-auto">
                <button className="btn btn-course">View all <i className="fas fa-caret-right right-nav-white" /></button>
              </div>
            </div>
          </div>
        </section>

        */}
        {/* /Popular Courses */}
        {/* Instructor 
        <section className="instructor-section bg-grey">
          <div className="container">
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
                <h2><span className="text-weight">Featured </span> Instructor <span className="header-right" /></h2>
                <p>They are highly qualified and trained in their areas</p>
              </div> 
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="instructor-card">
                  <div className="instructor-profile align-items-center">
                    <div className="instructor-img">
                      <img src={USER_8} alt="" />
                    </div>
                    <div className="instructor-desc">
                      <h3 className="mb-0 text-warning">David Lee</h3>
                      <span className="text-primary">Web Developer</span>
                      <p>I've been involved in teaching and education for more than ten years. Always eager to learn, I invested a lot of my time in learning…</p>
                    </div>
                  </div>
                  <div className="instructor-content d-flex">
                    <div className="ic-left">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 200</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="ic-right ml-auto">
                      <a href="#">View Profile <i className="fas fa-caret-right right-nav" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="instructor-card">
                  <div className="instructor-profile align-items-center">
                    <div className="instructor-img">
                      <img src={USER_7} alt="" />
                    </div>
                    <div className="instructor-desc">
                      <h3 className="mb-0 text-warning">Daziy Millar</h3>
                      <span className="text-primary">PHP Expert</span>
                      <p>I've spend the past three years as a lead instructor at many types of coding schools. As a self taught developer, I've experienced the...</p>
                    </div>
                  </div>
                  <div className="instructor-content d-flex">
                    <div className="ic-left">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 200</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="ic-right ml-auto">
                      <a href="#">View Profile <i className="fas fa-caret-right right-nav" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-btn m-auto">
                <button className="btn btn-course">Become an Instructor <i className="fas fa-caret-right right-nav-white" /></button>
              </div>
            </div>
          </div>
        </section>
        */}
        {/* /Instructor */}
        {/* Advanced Training 
        <section className="training-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="training-desc">
                  <h2>French for Beginners to Advanced Training</h2>
                  <p className="text-white mb-4">Get course that you need to improve your skills. Our experts are ready to help. Change your life through learing. Over 40,000 courses.</p>
                  <button className="btn btn-main">Find More <i className="fas fa-caret-right right-nav-secondary" /></button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="training-count text-center">
                  <p className="text-white">Time is running out</p>
                  <div className="training-counter">
                    <div className="counters text-center">
                      <div>
                        <p>300</p>
                      </div>
                      <p>Days</p>
                    </div>
                    <div className="counters text-center">
                      <div>
                        <p>30</p>
                      </div>
                      <p>Hours</p>
                    </div>
                    <div className="counters text-center">
                      <div>
                        <p>03</p>
                      </div>
                      <p>Minutes</p>
                    </div>
                    <div className="counters text-center">
                      <div>
                        <p>33</p>
                      </div>
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
        {/* /Advanced Training */}
        {/* Tab Section 
        
        <section className="tab-section">
          <div className="container">
            <div className="section-heading d-flex align-items-center text-background">
              <div className="heading-content">
                <h2><span className="text-weight">Popular </span> Courses <span className="header-right" /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="courses-tabs w-100 flex-wrap">
              <div className="course-left tab-content">
                <div className="tab-pane active" id="c1">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>145 NEW</span>
                            <h4>DESIGN COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>119<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c2">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE4} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>325 NEW</span>
                            <h4>BUSINESS COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>109<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c3">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE1} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>315 NEW</span>
                            <h4>LIFESTYLE COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>209<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c4">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE3} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>312 NEW</span>
                            <h4>SOFTWARE COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>195<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c5">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE2} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>115 NEW</span>
                            <h4>PHOTO COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>251<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-right p-0 flex-wrap">
                <div className="tabs-menus">
                  <div className="course-list nav nav-tabs"> 
                    <a href="#c1" data-toggle="tab" className="active">
                      <div className="d-block text-center course-tabs">
                        <i className="far fa-eye" /> 
                        <p>Design</p>
                      </div>
                    </a>
                    <a href="#c2" data-toggle="tab">
                      <div className="d-block text-center course-tabs">
                        <i className="fas fa-business-time" /> 
                        <p>Business</p>
                      </div>
                    </a>
                    <a href="#c3" data-toggle="tab">
                      <div className="d-block text-center course-tabs">
                        <i className="fab fa-rocketchat" /> 
                        <p>Lifestyle</p>
                      </div>
                    </a>
                    <a href="#c4" data-toggle="tab">
                      <div className="d-block text-center course-tabs">
                        <i className="fas fa-laptop-code" /> 
                        <p>Software</p>
                      </div>
                    </a>
                    <a href="#c5" data-toggle="tab">
                      <div className="d-block text-center course-tabs mb-0">
                        <i className="fas fa-camera-retro" /> 
                        <p>Photo</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Tab Section */}
        {/* Best Courses 
        <section className="featured-section bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="featured-card bg-dark-grey">
                  <h2 className="text-white">Best Courses</h2>
                  <p className="text-white">Courses for all levels cover technical skills, creative techniques, business strategies, and more. We have collected all of the necessary effective study.</p>
                  <a href="#" className="text-white">View More <i className="fas fa-caret-right right-nav-grey" /></a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="featured-card bg-primary">
                  <h2 className="text-white">Top rated Instructors</h2>
                  <p className="text-white">Courses for all levels cover technical skills, creative techniques, business strategies, and more. We have collected all of the necessary effective study.</p>
                  <a href="#" className="text-white">View More <i className="fas fa-caret-right right-nav-white" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
        {/* /Best Courses */}
        {/* Testimonial 
        <section className="testimonial-section bg-grey">
          <div className="container">
            <div className="section-header text-center">
              <h3>What People Says</h3>
              <p className="sub-title">Are you looking to join online institutions? Now it's very simple, Sign up with mentoring</p>
            </div>
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className="testimonial-slider">
                  <div id="customers-testimonials" className="owl-carousel text-center">
                    <div className="item">
                      <img src={USER_1} className="clients m-auto" alt="" />  
                      <i className="fas fa-quote-left quote my-4" />
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et erat venenatis cursus. Nulla facilisi. Vestibulum in arcu eu nulla venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                      <h6 className="name mt-4">Rashed kabir</h6>
                      <span>Designer</span> 
                    </div>
                    <div className="item">
                      <img src={USER_2} className="clients m-auto" alt="" />  
                      <i className="fas fa-quote-left quote my-4" />
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et erat venenatis cursus. Nulla facilisi. Vestibulum in arcu eu nulla venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                      <h6 className="name mt-4">Rashed kabir</h6>
                      <span>Designer</span> 
                    </div>
                  </div>
                </div>
                <div className="owl-controls">
                  <div className="owl-nav">
                    <div className="owl-prev" />
                    <div className="owl-next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Testimonial */}
       
        <section className="blog-sections">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,96L1440,160L1440,0L0,0Z"></path></svg>
          <div className="container bllgg" style={{marginTop:"-80px"}}>
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
              <Slide left>   <h2><span className="text-weight">Our </span> Latest News <span className="header-right" /></h2></Slide> 
              <Slide left> <p>ATTI latest campus news, get to know us, subscribe in our news letter</p> </Slide> 
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="blog-box blog-grid-box">
                  <div className="blog-grid-box-img">
                    <Link to="/app/Blog/blog-details">
                      <Zoom>
                      <img src={BLOG_01} className="img-fluid" alt="" />
                      </Zoom>
                    </Link>
                  </div>
                  <div className="blog-grid-box-content">
                  <Zoom bottom>
                    <div className="blog-avatar text-center">
                      <p>Posted on 24-01-2023</p>
                    </div>
                    </Zoom>
                    <Fade bottom> 
                    <h4><Link to="/app/Blog/blog-details">Contrary to popular belief, Lorem Ipsum is</Link></h4></Fade>
                    <Fade bottom>   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></Fade>
                    <Fade bottom>   <a href="#" className="text-primary">View More <i className="fas fa-caret-right right-nav" /></a></Fade>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog-box blog-grid-box">
                  <div className="blog-grid-box-img">
                    <Link to="/app/Blog/blog-details">
                    <Zoom>
                      <img src={BLOG_02} className="img-fluid" alt="" /></Zoom>
                    </Link>
                  </div>
                  <div className="blog-grid-box-content">
                  <Zoom bottom>
                    <div className="blog-avatar text-center">
                      <p>Posted on 24-01-2023</p>
                    </div>
                    </Zoom>
                    <Fade bottom> 
                    <h4> <Link to="/app/Blog/blog-details">The standard chunk of Lorem Ipsum used</Link></h4> </Fade>
                    <Fade bottom>  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></Fade>
                    <Fade bottom>   <a href="#" className="text-primary">View More <i className="fas fa-caret-right right-nav" /></a> </Fade>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog-box blog-grid-box">
                  <div className="blog-grid-box-img">
                    <Link to="/app/Blog/blog-details">
                    <Zoom> 
                      <img src={BLOG_03} className="img-fluid" alt="" /></Zoom>
                    </Link>
                  </div>
                  <div className="blog-grid-box-content">
                  <Zoom bottom>
                    <div className="blog-avatar text-center">
                      <p>Posted on 24-01-2023</p>
                    </div>
                    </Zoom>
                    <Fade bottom>     <h4> <Link to="/app/Blog/blog-details">The standard Lorem Ipsum passage, used</Link></h4></Fade>
                    <Fade bottom>  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></Fade>
                    <Fade bottom>  <a href="#" className="text-primary">View More <i className="fas fa-caret-right right-nav" /></a> </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
        <section className="popular-course-section accRed">
          <div className="container pb-4">
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
                <h2><span className="text-weight">Accreditated</span> With <span className="header-right" /></h2>
                
        
              </div> 
            </div>

            <Accrediatation/>
            </div>
            </section>
        {/* /Blogs */}
      </div>
      );
   
}

export default withRouter(Home);
