import React, { Component } from "react";
import Slider from "react-slick";
import Grad from '../assets/img/course/grad6.jpg'
import Grad2 from '../assets/img/course/grad3.jpg'
import { AppLogo } from "../../constant/imagepath_home";
export default function Banner() {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 7000,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <div >
        
        <Slider {...settings}>
       
          <div className="row htaCont">
            <div className="row dspFlex">
            <div className="col-6 ">
                        <div className="gradHTA2">
                        <img src={Grad} alt="" />
                        </div>
                  
            </div>
            <div className="col-6 hta-message">
                        <h1> Registrations are Open, <br/> <span> Throughout the year!</span></h1>
            </div>
               
            </div>
                  
        </div>
      
        <div className="row htaCont">
            <div className="row dspFlex">
           
       

                    <div className="col-6 ">
                        <div className="gradHTA2">
                        <img src={Grad2} alt="" />
                        </div>
                      
                    </div>

                    <div className="col-6 hta-message">
                        <h1> Spaces are Available, <br/> <span> Harry Now!</span></h1>
                    </div>
                  
            </div>
                  
         </div>

         <div className="row htaCont">
            <div className="row dspFlex jn">
                <h1>Learn Today, <span>Lead Tomorrow</span></h1>
           <img src={AppLogo} alt="" />
            </div>
                  
        </div>
           
       
        
        </Slider>
      </div>
    );
  
}