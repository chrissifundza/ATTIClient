import React, { Component } from "react";
import Slider from "react-slick";
import one from "../assets/img/course/slideAccreditation/1.png"
import two from "../assets/img/course/slideAccreditation/2.png"
import three from "../assets/img/course/slideAccreditation/3.png"
import four from "../assets/img/course/slideAccreditation/4.png"
import five from "../assets/img/course/slideAccreditation/5.png"
import six from "../assets/img/course/slideAccreditation/6.png"
export default function Accrediatation() {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          
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
      <div >
        
        <Slider {...settings}>
          <div className="cardAcred">
          <img src={one} alt="" />
          </div>
       
          <div  className="cardAcred">
          <img src={three} alt="" />
          </div>
          <div  className="cardAcred">
          <img src={four} alt="" />
          </div>
          <div  className="cardAcred">
          <img src={five} alt="" />
          </div>
          <div  className="cardAcred">
          <img src={two} height alt="" />
          </div>
          <div  className="cardAcred">
          <img src={six} alt="" />
          </div>
        </Slider>
      </div>
    );
  
}