import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function LocalCourse({id,Image,NQF,courseName, Category,CourseAccre}){

  const history = useHistory()
  const viewCourseDetails = ()=>{
      history.push("/details",{id,Category})
  }
  return(
        <div key={id} className="col-md-4 col-lg-4 d-flex flex-wrap">
        
        <div className="allcourse-card">
          <div className="imgCourse">
            <img src={Image} alt="" className="img-fluid" />
          </div>
         <div className='contCourse'>
             <h5>{courseName} NQF L{NQF}</h5>
         </div>
        </div>
       
      </div>
    )
}