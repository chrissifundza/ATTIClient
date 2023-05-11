import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeLayout from './Home/homelayout.jsx';
import Login from './Home/Authentication/login';
import Register from './Home/Authentication/register';
import Forgotpassword from './Home/Authentication/forgotpassword';

//Admin Layout
import AdminLayout from './Admin/initialpage/Sidebar/DefaultLayout';
import AdminLogin from './Admin/MainPage/Pages/Authentication/login';
import AdminRegister from './Admin/MainPage/Pages/Authentication/register';
import AdminForgotpassword from './Admin/MainPage/Pages/Authentication/forgotpassword';
import LockScreen from './Admin/MainPage/Pages/Authentication/lockscreen';
import Courses from './Home/Courses/Courses';
import CourseDetails from './Home/CourseDetails/courseDetails';
import ContactUs from './Home/Contactus/index.jsx';
import AboutUs from './Home/AboutUs/index.jsx';
import FAQ from './Home/FAQ/index.jsx';
import Admission from './Home/admission/index.jsx';
import Registration from './Home/registration/index.jsx';
import ApplicationProcess from './Home/admission/applicationProccess.jsx';



export default class AppUniversal extends Component {
	componentDidMount(){
        if (location.pathname.includes("login") || location.pathname.includes("register") ||location.pathname.includes("courses")||location.pathname.includes("contactus")|| location.pathname.includes("forgotpassword")
        || location.pathname.includes("otp")|| location.pathname.includes("lockscreen") ) {
            $('body').addClass('account-page');
        }else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
            $('body').addClass('error-page');
        }else if (location.pathname.includes("chat")  ) {
            $('body').addClass('chat-page');
        }
    }
	render(){
		const { location, match } = this.props;
		if (location.pathname === '/') {
			return (<Redirect to={'/app/index'} />);		 
	  	}
		return (
			<Switch>
				<Route path="/app/courses/:id" component={Courses} />	
				<Route  path="/app" component={HomeLayout} />
				<Route path="/courses" component={Courses} />	
				<Route path="/details" component={CourseDetails} />	
				<Route path="/admission" component={Admission}/> 
				<Route path="/registration" component={Registration}/> 
				<Route path="/applicationprocess" component={ApplicationProcess}/> 
				<Route path="/admin" component={AdminLayout} />
				<Route path="/login" component={Login} />	
                <Route path="/register" component={Register} />	
				<Route path="/contactus" component={ContactUs}/>
				<Route path="/aboutus" component={AboutUs}/>
				<Route path="/faq" component={FAQ}/>
                <Route path="/forgot-password" component={Forgotpassword} />
				<Route path="/admin_login" component={AdminLogin} />
				<Route path="/admin_register" component={AdminRegister} />
				<Route path="/admin_forgot-password" component={AdminForgotpassword} />
				<Route path="/lock-screen" component={LockScreen} />			
			</Switch>
	
		);
	}
}
