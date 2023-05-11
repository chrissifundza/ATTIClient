import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../context/ContextData";
import { Reveal } from "./reveal";

export default function SingleCategory({MyCourses,cat}){
    const {AllCourses} = useContext(ContextData)
 
    let totalCourse=AllCourses&& AllCourses.filter((course)=>course.CourseCat==cat.CoureCat)
  
 
    return(
      
          <div key={cat.CourseAccre} className="col-md-4 col-lg-4 d-flex flex-wrap">
                <Link style={{width:"100%"}} to={`courses/${cat.CoureCat}`}>
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={cat.CategoryCover} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <Reveal>
                    <h4 className="mb-3">{cat.CoureCat}</h4>
                    <p>Over <span className="text-warning">{totalCourse.length}</span> Courses</p>
                    </Reveal>
                  </div>
                </div>
                </Link>
              </div>
       
    )
}