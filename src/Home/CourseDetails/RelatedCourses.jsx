import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function RelatedCourse({id,CourseImage,CourseNQF,CourseName,CourseCat}){

  const history = useHistory()
  const viewCourseDetails = ()=>{
      history.push("/details",{id,CourseCat})
      location.reload()
  }
  return(
   
<div style={{marginBottom:"10px"}}  key={id}  onClick={viewCourseDetails} className="row nbv justify-content-space-between">
<div className="courseImag">
    <img src={CourseImage} alt="" />
</div>
<div className="courseIn">
    <div className="row"><h6>{CourseName}</h6></div>
    <div className="row">NQF Level: {CourseNQF}</div>
</div>

</div>
    )
}