
import React, { Component, useContext, useState } from 'react';
// import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { ContextData } from '../../context/ContextData';
import axios from "axios";
import swal from 'sweetalert';
export default function ApplicationProcess() {
    const {AllCourses} = useContext(ContextData);
    const [Course, setCourse] = useState("");
    const [Gender, setGender] = useState("");
    const [Race, setRace] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange3 = event => {
      
      setIsSubscribed(current => !current);
    };
    console.log(AllCourses)
    const courses = AllCourses.map((c)=>{
        return(
            <option key={c.CourseName} value={c.CourseName + " " + c.CourseNQF}>{c.CourseName} L{c.CourseNQF}</option>
        )
    })
const [Inputs, setInputs] = useState({course:Course,name:"", lastname:"",email:"",cellphone:"",idnumber:"",physicaladdress:"",postaladdress:"",gender:Gender,race:Race,})
console.log(Inputs)
const handleChnage = e =>{
  e.persist();
setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
}
    const sendApplication = async (e)=>{
      if (isSubscribed==false) {
      return  swal("Error",'Accept Privacy Policy and Terms',"error");
      } 
      e.preventDefault()
      console.log(Inputs)
      Inputs.course = Course;
      Inputs.gender=Gender;
      Inputs.race=Race;
      console.log(Gender)
      const res = await axios.post("http://localhost:8000/admission",Inputs)
      console.log(res)
      if (res.data==="Message sent successfully"){
        swal("Well done!", "Application sent successfully", "success");
       
      }
      
    }
      return (
      <div className="bg-pattern-style1 bg-pattern-style-register">
      <div className="content">
        {/* Register Content */}
        <div className="account-content">
          <div className="account-box">
            <div className="login-right">
              <div className="login-header">
                <h3><span> <Link to="/">ATTI College</Link> </span> Admission Form</h3>
                <p className="text-muted">Fill in all the following information</p>
              </div>
              {/* Register Form */}
              <div>
              <div className="form-group"> 
              <label className="form-control-label">Choose a Course</label>
                      <select className='form-control'onChange={(e)=>setCourse(e.target.value)} name="course" id="">
                      <option value="">Select</option>
                        {courses}
                      </select>
                </div>
                <div className="row">

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">First Name</label>
                      <input id="first-name" type="text" onChange={handleChnage} className="form-control" name="name" autoFocus />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Last Name</label>
                      <input id="last-name" type="text" onChange={handleChnage} className="form-control" name="lastname" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label">Email Address</label>
                  <input id="text" type="email" onChange={handleChnage} className="form-control" name='email'/>
                </div>

                <div className="form-group">
                  <label className="form-control-label">Cellphone Number</label>
                  <input id="text" type="text" onChange={handleChnage} name='cellphone' className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-control-label">ID NO.</label>
                  <input id="text" onChange={handleChnage} type="email" name='idnumber' className="form-control" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Gender</label>
                      <select className='form-control'onChange={(e)=>setGender(e.target.value)} name="" id="">
                      <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                      <label className="form-control-label">Race</label>
                      <select className='form-control'onChange={(e)=>setRace(e.target.value)}  name="" id="">
                      <option value="">Select</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Colored">Colored</option>
                      </select>
                    </div>
                  </div>
                
                  <div className="col-lg-6">
                  <div className="form-group">
                  <label className="form-control-label">Physical Address</label>
                  <textarea style={{width:"100%"}} onChange={handleChnage} name='physicaladdress' id="email" rows={3} type="text" className="form-control" />
                  </div>
                </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                  <label className="form-control-label">Postal Address</label>
                  <textarea onChange={handleChnage} name='postaladdress'  style={{width:"100%"}} id="email" rows={3} type="text" className="form-control" />
                  </div>
                </div>
                  
                </div>
                <div className="form-group">
                  <div className="custom-control custom-control-xs custom-checkbox">
                    <input type="checkbox" value={isSubscribed} onChange={handleChange3} className="custom-control-input" name="agreeCheckboxUser" id="agree_checkbox_user" />
                    <label className="custom-control-label" htmlFor="agree_checkbox_user">I agree to ATTI College</label> <a tabIndex={-1} href="javascript:void(0);">Privacy Policy</a> &amp; <a tabIndex={-1} href="javascript:void(0);"> Terms.</a>
                  </div>
                </div>
                <button className="btn btn-primary login-btn"onClick={sendApplication}>Submit Application</button>
                {/* <button className="btn btn-primary login-btn" type="submit">Create Account</button> */}
                 
              </div>
              {/* /Register Form */}
            </div>
          </div>
        </div>
        {/* /Register Content */}
       
      </div>
    </div>
      );
 
}


