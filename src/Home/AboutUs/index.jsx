import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import about from "../assets/img/abt2.jpg";
import about3 from "../assets/img/abt3.jpg";
import about4 from "../assets/img/abt4.jpg";
import about7 from "../assets/img/abt7.jpg";
import about8 from "../assets/img/abt8.jpg";
import about6 from "../assets/img/abt6.jpg";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import kathy from "../assets/img/user/kathy.jpg";
import "./aboutUs.css"
import Managers from "./team";
import Footer from "../footer";

export default function AboutUs(){
    return(
        <>
    <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/contactus">About Us</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/aboutus" className='active'>AboutUs</Link></span>
            </div>
            </div>
        </div>
     
    </section>
    <br /> <br />
    <div className="container mt-4">
            <div className="row aboutUsCont">
          <div className="col-md-6 colText">
          <Slide left>  <h2>Our Mission & Vision</h2></Slide>
            <p><Fade bottom>  
            The mission of ATTI College, a Higher Education and Training College, is to provide the highest quality education in the Information and Communications Technology Sector, as well as the Practical Theology and Ministry Sector. ATTI aims to make a difference in and around the provinces focusing on Cutting Edge Qualifications, Quality Staff, up to date Curricula and Leading by Example. ATTI seek to play a key-role in the directions and deployment of knowledge-based learning within the respective areas. 
            To provide education of the highest quality with these emphases, </Fade><br/> <br/> <Fade bottom> ATTI’s mission requires selection of an outstanding and caring faculty, committed to creating an open, cooperative, learning environment. ATTI College provides for the continuous support and development of this faculty. We aim to grow in the recognition and respect ATTI represent through pioneering and leading in the effective deployment of technology and know-how.
</Fade>
            </p>
          
          </div>
          <div className="col-md-5 abt-mess mobileView">
          <Zoom>
            <img src={about} alt="" />
            </Zoom>
          </div>
          
            </div>
            <svg style={{marginBottom:"-120px"}} className="mobileView2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,32L1440,32L1440,0L0,0Z"></path></svg>
            <div className="row aboutUsCont mobileView">
      
          <div className="col-md-5 abt-mess">
          <Zoom>
            <img className="abt-img2" src={about3} alt="" />
            </Zoom>
          </div>
          <div className="col-md-6 mobileView mobileView2">
      <Slide right>   <h2>...mission & vision continues</h2></Slide> 
            <p>
                <Fade bottom>
            The teaching-learning process at ATTI is shaped by a view of education as a process of awakening the "learner within," for the learners to become lifelong learners. Learners are encouraged to be active, involved members of society. ATTI will foster career building by ensuring organisational pride, loyalty, and emotional ownership of oneself, instilling the highest standard of an ethical lifestyle. 
            The education is carried on with a concern for the world in which we live and for improving human society. ATTI strive to educate morally sensitive leaders for future generations.</Fade><br/> <br/><Fade bottom>Therefore, ATTI stresses global education, peaceful resolution of conflict, equality of individuals, and high moral standards of personal conduct. 
            The College continuously strive towards an inclusive and enabling, value-driven organisational culture with relevance through continuous innovation. </Fade> 

            </p>
          
          </div>
            </div>

     
        </div>

       <div className="container abttt mt-4">
       <svg style={{marginBottom:"-120px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,32L1440,32L1440,0L0,0Z"></path></svg>
        <div className="row aboutUsCont">
          <div className="col-md-6">
         <Slide left>  <h2>Our Values</h2></Slide> 
            <p>
          <Fade bottom>  In fulfilling its mission, ATTI adopts the following Objectives:</Fade>


            </p>

            <div className="learningoutcome">
                          
                          <ul className="Det">
                             <Fade bottom>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Striving towards excellent education in a wide spectrum of disciplines</p>
                                          
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
                                  <p>To attract outstanding learners from diverse backgrounds;</p>
                                          
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
                                  <p>To offer flexible, life-long learning opportunities;</p>
                                          
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
                                  <p>To create a market awareness within the ICT, Accounting, Small Business Management and Office Administrative skills, Practical Theology and Ministry Sectors;</p>
                                          
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
                                  <p>To develop a diverse faculty which is nationally and internationally recognized for excellence in teaching;</p>
                                          
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
                                  <p>To provide a challenging program with an ICT, Accounting, Small Business Management, Office Administrative, Practical Theology and Ministry curriculum that encourages creativity, independent thought, and intellectual depth, breadth, and curiosity;</p>
                                          
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
                                  <p>To offer high quality graduate and professional skills programs that prepare learners for intellectual, professional, and public leadership;</p>
                                          
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
                                  <p>To instil in its students an appreciation for the human condition, a concern for the public well-being, and a life-long commitment to learning;</p>
                                          
                                  </div>
                              </li>
        </Fade>

                             
                          </ul>
                  </div>

          
          </div>
          <div className="col-md-5 mobileView abt-mess">
            <Zoom>
            <img src={about} alt="" />
            </Zoom>
          </div>
            </div>


            
        </div>

        

        <div className="container abttt mt-4">
       <svg style={{marginBottom:"-120px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,32L1440,32L1440,0L0,0Z"></path></svg>
        <div className="row  aboutUsCont">
        <div className="col-md-5 mobileView2 abt-mess">
            <Zoom>
            <img src={about4} alt="" />
            </Zoom>
          </div>
          <div className=" mobileView col-md-6">
         <Slide right>  <h2>ATTI aims to become the leading training, education, and motivation institution through:</h2>
            
         </Slide> 
            <div className="learningoutcome">
                          
                          <ul className="Det">
                             <Fade bottom>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Focusing on best value products and services.</p>
                                          
                                  </div>
                              </li>
                              </Fade>
                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Effectively managing all our resources to optimise group profitability (seating all assets).</p>
                                          
                                  </div>
                              </li>
                                 
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Treating our customers and stakeholders as partners and establishing long term relationships.</p>
                                          
                                  </div>
                              </li>

                                      
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Being an equal opportunity company and developing staff and trainees to the fullest potential.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Being at the cutting edge of new technologies and processes, with the emphasis on training and development techniques.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To provide appropriate and practical quality computer education and training to individuals, corporate and government clients, aligned to industry requirements as set out by SAQA, MICT SETA and the FASSET Seta.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Meet the skills requirement of local and international customers and economies, by providing competent and productive IT, Accounting, Small Business Management and Office Administrative skills training relevant in the marketplace.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To make a considerable contribution to the national skills upgrade initiative in the IT sector of South Africa, and by so doing encourage employment opportunities.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To focus on empowerment of all people from all sectors of the population, especially the youth.</p>
                                          
                                  </div>
                              </li>
                             
                          </ul>
                  </div>

          
          </div>
          
            </div>


            
        </div>




        <div className="container abttt mt-4">
       <svg style={{marginBottom:"-120px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,32L1440,32L1440,0L0,0Z"></path></svg>
        <div className="row mobileView2 aboutUsCont">
          <div className="col-md-6">
            <h2>Our Philosophy is</h2>
          

            <div className="learningoutcome">
                          
                          <ul className="Det">
                             
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Striving towards excellent education in a wide spectrum of disciplines</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To attract outstanding learners from diverse backgrounds;</p>
                                          
                                  </div>
                              </li>
                                 
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To offer flexible, life-long learning opportunities;</p>
                                          
                                  </div>
                              </li>

                                      
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To create a market awareness within the ICT, Accounting, Small Business Management and Office Administrative skills, Practical Theology and Ministry Sectors;</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To develop a diverse faculty which is nationally and internationally recognized for excellence in teaching;</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To provide a challenging program with an ICT, Accounting, Small Business Management, Office Administrative, Practical Theology and Ministry curriculum that encourages creativity, independent thought, and intellectual depth, breadth, and curiosity;</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To offer high quality graduate and professional skills programs that prepare learners for intellectual, professional, and public leadership;</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To instil in its students an appreciation for the human condition, a concern for the public well-being, and a life-long commitment to learning;</p>
                                          
                                  </div>
                              </li>


                             
                          </ul>
                  </div>

          
          </div>
          <div className="col-md-5 mobileView abt-mess">
            
            <img src={about6} alt="" />
          </div>
            </div>


            
        </div>

       

        <div className="container abttt mt-4">
       <svg style={{marginBottom:"-120px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,32L1440,32L1440,0L0,0Z"></path></svg>
        <div className="row mobileView2 aboutUsCont">
        <div className="col-md-5 abt-mess">
            <img src={about7} alt="" />
          </div>
          <div className="mobileView col-md-6">
            <h2>Goals and Strategic  Objectives</h2>
            

            <div className="learningoutcome">
                          
                          <ul className="Det">
                             
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To effectively train and place as many students as possible.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To empower out trainees with enough specialised knowledge and skills to be in demand in the economy.</p>
                                          
                                  </div>
                              </li>
                                 
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Treating our customers and stakeholders as partners and establishing long term relationships.</p>
                                          
                                  </div>
                              </li>

                                      
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To become a world class organisation by the effective and efficient linking of business plans with markets and people.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To utilise detailed business plans towards organisational improvements and development.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To enhance customer and employee satisfaction through the implementation of result orientated performance management systems which quantifies performance outputs, indicating the value edition and contribution of job incumbents.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To achieve preferred customer status by the constructive use of information filtering from our organisations’ environment through well-developed systems and processes; the effective devising and implementation of strategies based on that information, the making of plans based on these strategies; as well as the implementation, control, and feedback thereof.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To continuously design business plans ‘outside-in’ by using the information from customers, suppliers as well as other stakeholders as major inputs.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To use the information from employees to design empowerment strategies that will activate employees to exceed customers and suppliers’ expectations.</p>
                                          
                                  </div>
                              </li>

                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To enhance organisational improvement initiatives through personal change of management and employees by processes aimed at changing those individuals by increasing their level of self-awareness (motivational profiles, interpersonal functioning styles, communication preferences, conflict resolutions styles, locus of control, etc.)</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To form alliances or partnerships through outsourcing, as well as acting as an outsourcing partner.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To be at the centre of new developments and innovations, internally by detecting new trends in the market, and externally by utilising our existing infrastructure and resources to facilitate new ideas and projects of entrepreneurs.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To develop personnel and management through training and development.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To align management and employees with government policies and objectives regarding the empowerment of the previously disadvantaged communities, both through the appointment of directors as well as middle management of individuals belonging to this group</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Joint ventures will also be embarked upon, whereas the parties undertake to share the profit on the fulfilment of the contract in relation to the equity share held by the respective parties in the joint venture. This will be done by means of a contractual arrangement between an established enterprise and a previously disadvantaged enterprise.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>To lead an active role in developing our own training materials, and ourselves.</p>
                                          
                                  </div>
                              </li>

                              
                             
                             
                          </ul>
                  </div>

          
          </div>
          
            </div>


            
        </div>

       

        <div className="container abttt mt-4">
       <svg style={{marginBottom:"-120px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151d70" fill-opacity="1" d="M0,32L1440,32L1440,0L0,0Z"></path></svg>
        <div className="row aboutUsCont">
          <div className="col-md-6">
            <h2>Evidence that our Company Ensures the Achievement Desired Outcomes. </h2>
          <p>This is achieved by using the 5 NQF objectives:</p>

            <div className="learningoutcome">
                          
                          <ul className="Det">
                             
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>An incorporated national framework for learning achievements.</p>
                                          
                                  </div>
                              </li>

                              
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Facilitate access to, and mobility and progression within education, training, and career paths;</p>
                                          
                                  </div>
                              </li>
                                 
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Enhance the quality of education and training;</p>
                                          
                                  </div>
                              </li>

                                      
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Accelerate the redress of past unfair discrimination in education, training, and employment opportunities;</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Contribute to the full personal development of each learner and the social and economic development of the nation at large.</p>
                                          
                                  </div>
                              </li>

        <p>This is evidenced by:</p>
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Seta accreditation sought – compliance with requirements.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Assessment and awarding of competency judgments to suitable Learners.</p>
                                          
                                  </div>
                              </li>

        
                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Quality Management policies and procedures, ensuring high quality programme development and delivery.</p>
                                          
                                  </div>
                              </li>

                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Policies and procedures ensuring high quality facilitators and assessors.</p>
                                          
                                  </div>
                              </li>

                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Ensuring Learning Programmes are Unit Standard aligned and therefore contribute to the career development of each Learner.</p>
                                          
                                  </div>
                              </li>

                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Compliance with all employment equity and skills development legislation.</p>
                                          
                                  </div>
                              </li>

                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>Learner selection and development policies in place.</p>
                                          
                                  </div>
                              </li>

                              <li>
                                  <div className="circleIcon">
                                      <div className="circle">
                                          <i className="fa fa-check" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <div className="pra">
                                  <p>On-going feedback and evaluation procedures in place.</p>
                                          
                                  </div>
                              </li>


                             
                          </ul>
                  </div>

          
          </div>
          <div className="col-md-5 mobileView abt-mess">
            
            <img src={about8} alt="" />
          </div>
            </div>


            
        </div>
        <section className="popular-course-section mobileView teabbtyu">
        <div className="teilt">
      <div className="tilte">
      <h2>Our Team</h2>
    <div className="line"></div>
    </div>
      </div>
          <div className="container pb-4">
         
            <Managers/>
            </div>
            </section>
        <div className="team-area">
  <div className="container abt-team-atti">
    
  
    

  </div>
</div>
<Footer/>
        </>

    )
}