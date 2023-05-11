import React, { Component } from "react";
import Slider from "react-slick";
import kathy from "../assets/img/course/facilitators/kathy.jpg";
import pretty from "../assets/img/course/facilitators/pretty.png";
import mashaba from "../assets/img/course/facilitators/mashaba.jpg";
import poiter from "../assets/img/course/facilitators/pointer.jpg";
import christor from "../assets/img/course/facilitators/christo.jpg";
import kuhle from "../assets/img/course/facilitators/kuhle.jpg";
import Mavu from "../assets/img/course/facilitators/Mavu2.jpg";
import nic from "../assets/img/course/facilitators/nic.jpg";
import Lindiwe from "../assets/img/course/facilitators/lind.jpg";
export default function Managers() {
  
    const settings = {
      
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
 
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
     
    };
    return (
      <div>
        
        <Slider   {...settings}>
            <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={nic}/>
            </div>
            <div className="caption">
                <h3>Nicolette Coetzee </h3>
                <p>Managing Director</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={poiter}/>
            </div>
            <div className="caption">
                <h3>Poiter Katane </h3>
                <p>ETQA Manager</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={kuhle}/>
            </div>
            <div className="caption">
                <h3>Kuhle Mphetseni</h3>
                <p> ETQA Assistant</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={pretty}/>
            </div>
            <div className="caption">
                <h3>Pretty Msimango </h3>
                <p>Training Manager</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={christor}/>
            </div>
            <div className="caption">
                <h3>Christo Coetzee</h3>
                <p> HR & Finance Manager </p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={Mavu}/>
            </div>
            <div className="caption">
                <h3>Mazo Mavuso </h3>
                <p>Business Administrator</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={kathy}/>
            </div>
            <div className="caption">
                <h3>Nonhlakanipho Phelembe</h3>
                <p>Corporate Administrator</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={Lindiwe}/>
            </div>
            <div className="caption">
                <h3>Lindiwe Hlophe</h3>
                <p>Courseware printing, Scanning & Filing Officer </p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className="cntbb">
        <div className=" profile-card">
            <div className="img">
                <img src={mashaba}/>
            </div>
            <div className="caption">
                <h3>Patrick Mashaba</h3>
                <p>Facilitator</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook i"></i></a>
                    <a href="#"><i className="fab fa-twitter i" ></i></a>
                    <a href="#"><i className="fab fa-instagram i"></i></a>
                    <a href="#"><i className="fab fa-youtube i"></i></a>
                </div>
            </div>
        </div>
        </div>

   
        </Slider>
      </div>
    );
  
}