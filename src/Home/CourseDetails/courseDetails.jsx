import React, { useState,useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom";
import Header from '../header';
import "../Courses/Courses.css";
import Overview from "./Overview";
import Unit from "./Unit";
import Instructor from "./Instructor";
import Footer from "../footer";
import { ContextData } from '../../context/ContextData';
import RelatedCourse from "./RelatedCourses";
export default  function CourseDetails(){
const [Display, setDisplay] = useState("")
const [One, setOne] = useState("active");
const [Two, setTwo] = useState("");
const [Three, setThree] = useState("");
const {eachCourseDetail,eachCourseOverview,eachCourseUnits,eachCourseInstructor,AllCourses} = useContext(ContextData);
const [data2, setdata2] = useState([]);
const [Overiewinfo, setOveriew] = useState({});
const [Units, setUnits] = useState({});
const [Instructorinfo, setInstructor] = useState({});
    const history = useHistory();
    const data = history.location?.state;
    console.log(data)
    let totalCourse=AllCourses&& AllCourses.filter((course)=>course?.CourseCat==data?.CourseCat)
    console.log(totalCourse)
    const handleChange = (d)=>{
        if (d =="overview") {
            setOne("active")
            setTwo("")
            setThree("")
            setDisplay(<Overview {...Overiewinfo}/>)
        }
        if(d=="unit") {
            setOne("")
            setTwo("active")
            setThree("")
            setDisplay(<Unit {...Units}/>) 
        }
        if(d=="instructor")  {
            setOne("")
            setTwo("")
            setThree("active")
            setDisplay(<Instructor {...Instructorinfo}/>)
        }
    }
   
    useEffect(()=>{
       

       async function getDataDetails(){
            let d = await eachCourseDetail(data.id)
            setdata2(d)
            console.log(d)
        }
        getDataDetails()

        
       async function getDataOverview(){
        let d = await eachCourseOverview(data.id)
        setOveriew(d)
        console.log(d)
    
    }
    getDataOverview()

    
    async function getDataUnits(){
        let d = await eachCourseUnits(data.id)
        setUnits(d)
        console.log(d)
    }
    getDataUnits()

    
    async function getDataInstructor(){
        let d = await eachCourseInstructor(data.id)
        setInstructor(d)
        console.log(d)
    }
    getDataInstructor()

    },[])
    useEffect(()=>{
        Overiewinfo&&handleChange("overview")
    },[Overiewinfo])
     
    const ApplicationP =()=>{
        history.push("/applicationprocess")
    }
    return(
    <>
    
    <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/courses">Course Details</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/courses" className='Inactive'>Courses</Link></span> / <span className='active'>CourseDetails</span>
            </div>
            </div>
        </div>
    </section>
    <section className="allcourse-section bg-grey">
          <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                       <div className="title">
                       <h4>{data2.courseName} NQF Level {data2.NQF}</h4>
                        <div className='line'></div>
                       </div>

                       <div  className="coureDetailImage">
                           {data2.CourseCover&& <img src={data2.CourseCover} alt ="course image"/>}
                       </div>

                       <div className="row mt-2 nb-2">
                       <div className="btn-group ">
                        <button type="button" onClick={()=>handleChange('overview')} className={`btn  groBTN btn-primary ${One}`}>OVERVIEW</button>
                        <button type="button" onClick={()=>handleChange('unit')}className={`btn  groBTN btn-primary ${Two} `}>LEARNING AREA</button>
                        <button type="button" onClick={()=>handleChange('instructor')} className={`btn  groBTN btn-primary ${Three}`}>BROCHURE</button>
                        
                        </div>
                       </div>

                 {Display}

                     </div>
                     <div className="col-md-4">
                      <div className="title">
                      <h5>Course Details</h5>
                        <div className='line'></div>
                      </div>

                      <div className="listDetails">
                        <div className="name-icon">
                            <div className="icon">
                            <i className="fa fa-clock" aria-hidden="true"></i>
                            </div>
                            <div className="name">
                                Duration:
                            </div>
                        </div>
                        <div className="desc">
                            <span>{data2.CourseDuaration}</span>
                        </div>
                      </div>

                      <div className="listDetails secondD">
                        <div className="name-icon">
                            <div className="icon">
                            <i class="fa fa-signal" aria-hidden="true"></i>
                            </div>
                            <div className="name">
                                NQF Level:
                            </div>
                        </div>
                        <div className="desc">
                            <span>{data2.NQF}</span>
                        </div>
                      </div>

                      <div className="listDetails secondD">
                        <div className="name-icon">
                            <div className="icon">
                            <i class="fa fa-book" aria-hidden="true"></i>
                            </div>
                            <div className="name">
                                SAQA ID:
                            </div>
                        </div>
                        <div className="desc">
                            <span>{data2.SAQA}</span>
                        </div>

                      
                      </div>

                      <div className="listDetails secondD">
                        <div className="name-icon">
                            <div className="icon">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                            </div>
                            <div className="name">
                                Credits:
                            </div>
                        </div>
                        <div className="desc">
                            <span>{data2.Credits}</span>
                        </div>
                      </div>

                      <div className="listDetails secondD">
                        <div className="name-icon">
                            <div className="icon">
                            <i class="fa fa-certificate" aria-hidden="true"></i>
                            </div>
                            <div className="name">
                                Certificate:
                            </div>
                        </div>
                        <div className="desc">
                            <span>{data2.Certification}</span>
                        </div>
                      </div>

                      <div className="listDetails secondD">
                        <div className="name-icon">
                            <div className="icon">
                            <i class="fa fa-university" aria-hidden="true"></i>
                            </div>
                            <div className="name">
                                Category:
                            </div>
                        </div>
                        <div className="desc">
                            <span>{data?.CourseCat}</span>
                        </div>
                      </div>

                      <button className="btn applynow" onClick={ApplicationP}>Apply Now</button>


                      <div className="title outcome otherCourse mt-4">
                            <h5>Related Courses</h5>
                            <div className='line'></div>
                        </div>

                        <div className=" col-12 relatedCourses">
                           {totalCourse&&totalCourse.filter((c)=>c.CourseID!=data2.SAQA).map((course)=> <RelatedCourse {...course}/>)}
                          
                        </div>

                     </div>
                    </div>
               
              </div>
            </section>

            <Footer/>
    </>
    )
}