import React from "react";
import mashaba from "../assets/img/course/facilitators/mohamed.jpg"
import facebook from "../assets/img/course/facilitators/fb.jpg"
import twitter from "../assets/img/course/facilitators/t.jpg"
import lindkedin from "../assets/img/course/facilitators/l.jpg"
import youtube from "../assets/img/course/facilitators/y.jpg"
export default function Instructor({FactualSheet}){
return(
    <>
       <div className="title">
            <h5>Download Brochure</h5>
            <div className='line'></div>
         </div>

         <div className="row">
            <div className=" col-12 col-md-4 ml-3  p-0">
                <div className=" instructor-profile2">
                <ul className="Det">
                            
                                
                            <li>
                            <div className="circleIcon">
                                <div className="circle">
                                <i className="fa fa-arrow-right" ></i>
                                </div>
                            </div>
                            <div className="pra">
                            <p><a href={FactualSheet} target="_blank" rel="noopener noreferrer">Open Brochure</a></p>
                                    
                            </div>
                        </li>
                      
                 
                            

                           
                </ul>
                </div>
            </div>
         </div>
    </>
)
}