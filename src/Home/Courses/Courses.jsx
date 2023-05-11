import React, { Component, useEffect, useState,useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header';
import "./Courses.css";
import { ContextData } from '../../context/ContextData';
import { courses } from './api.jsx';
import SignleCourse from './singleCourse';
import Footer from '../footer';
import LocalCourse from './localCourse';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Courses(){
    const [Filter, setFilter] = useState("All");
    const [Search, setSearch] = useState("");
    const [Defaultvalaue, setDefaultvalaue] = useState("All");
    const locationid = useLocation();
    const id = locationid.state?.state.path
    const {AllCourses,Categories} = useContext(ContextData)
    console.log(AllCourses)
 console.log(id)

 useEffect(()=>{
    if(id) {
        setFilter(id) 
        setDefaultvalaue(id)
    } 
 },[id])
    return(<>
    <Header/>
    <section className="banner-section">
        <div className='intro-bg'>
            <div className='title'>
            <h3><Link className='pathC' to="/courses">Courses</Link></h3>
            <div className='links'>
            <span><Link to='/' className='Inactive'>Home</Link ></span> / <span><Link to="/courses" className='active'>Courses</Link></span>
            </div>
            </div>
        </div>
    </section>
    <section className="allcourse-section bg-grey">
          <div className="container">
                     
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-lg-4 d-flex flex-wrap">
                    <div className="form-group">
                        <label className="form-control-label">Filter by</label>
                        <select name="" id="" defaultValue={id?id:"All"}  className='form-control' onChange={(e)=>{
                            setFilter(e.target.value)
                            setSearch("")
                            }}>
                            <option value="All">All</option>
                            {Categories&&Categories.map((cat)=><option value={cat.CoureCat}>{cat.CoureCat}</option>)}
                            
                            
                           
                        </select>
                  </div>
                    </div>
            <div className=" col-lg-6 col-md-6 align-right col-lg-4 d-flex flex-wrap">
                    <div className="form-group">
                        <label className="form-control-label">Search a course</label>
                    <div className='inputSearch'>
                        <input type="text" onChange={(e)=>{
                            setFilter("All")
                            setSearch(e.target.value.toLocaleLowerCase())
                            
                            }} className="form-control" /> <button><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                  </div>
            </div>
                </div>
           

            <div className="row mt-2">
                {Filter==="All"? AllCourses.filter((c)=>c.CourseName.toLowerCase().includes(Search.toLowerCase())).map((course)=><SignleCourse key={course.id} {...course}/>): AllCourses.filter((course)=>course.CourseCat==Filter).map((course)=><SignleCourse key={course.id} {...course}/>)}
                {/* {Filter==="All"? courses.filter((c)=>c.courseName.toLowerCase().includes(Search.toLowerCase())).map((course)=><LocalCourse key={course.id} {...course}/>): courses.filter((course)=>course.Category==Filter).map((course)=><LocalCourse key={course.id} {...course}/>)} */}
              </div>

              </div>
            </section>

            <Footer/>

    </>)
}