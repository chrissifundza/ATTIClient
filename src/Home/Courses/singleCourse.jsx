import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function SignleCourse({id,CourseImage,CourseNQF,CourseName,CourseCat}){

  const history = useHistory()
  const viewCourseDetails = ()=>{
      history.push("/details",{id,CourseCat})
  }
  return(
        <div key={id} className="col-md-4 col-lg-4 d-flex flex-wrap" onClick={viewCourseDetails}>
        
        <div className="allcourse-card">
          <div className="imgCourse">
            <img src={CourseImage} alt="" className="img-fluid" />
          </div>
         <div className='contCourse'>
             <h5>{CourseName} NQF L{CourseNQF}</h5>
         </div>
        </div>
       
      </div>
    )
}