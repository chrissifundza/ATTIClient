import React, { Component, useContext, useEffect } from 'react';
import { withRouter, Link, useLocation  } from 'react-router-dom';
import {AppLogo,USER} from '../constant/imagepath_home';
import $ from 'jquery'; 
import { ContextData } from '../context/ContextData';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Header()  {
	const location = useLocation();
	let pathname=location.pathname;
	const history = useHistory()
	const {Categories,AllCourses} = useContext(ContextData)
	useEffect(()=>
	{
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

		$(document).on('click', '#menu_close', function() {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
	},[]) 
	
	const Goto =(path)=>{
		history.push("/courses",{state:{path:path}})
	}
	return (
		<div className='navTopATTI'>
		 <div className="header-top">
		 <div className="container-fluid">
		   <div className="row">
			 <div className="col-md-8">
			   <div className="left-top">
				 <ul>
				   <li><i className="fas fa-map-marker-alt top-icon" /> 16 Rothery St, Mbombela, 1200</li>
				   <li><i className="fas fa-phone-volume top-icon" /> 013 755 2638</li>
				   <li><i className="fas fa-envelope top-icon" /> info@atti.co.za</li>
				 </ul>
			   </div>
			 </div>
			 <div className="col-md-4">
			   <div className="right-top">
				 <ul>
				   <li>
					 <a target={'_blank'} href="https://www.facebook.com/ATTIMbombela/"><i className="fab fa-facebook-f top-icons" /></a>
				   </li>
				   <li>
					 <a target={'_blank'} href="https://www.instagram.com/attimbombela/?hl=en"><i className="fab fa-instagram top-icons" /></a>
				   </li>
				   <li>
					 <a target={'_blank'} href="https://www.linkedin.com/company/atti-nelspruit/about/"><i className="fab fa-linkedin-in top-icons" /></a>
				   </li>
				   <li>
					 <a href="#"><i className="fab fa-twitter top-icons" /></a>
				   </li>
				 </ul>
			   </div>
			 </div>
		   </div>
		 </div>
	   </div>
		<header className="header">
				<nav className="navbar navbar-expand-lg header-nav">
				<div className="container-fluid">
				<div className="navbar-header">
				<a id="mobile_btn" href="">
					<span className="bar-icon">
					<span />
					<span />
					<span />
					</span>
				</a>
				<Link to="/app/index" className="navbar-brand logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
				</Link>
				</div>
				<div className="main-menu-wrapper">
				<div className="menu-header">
					<Link to="/app/index" className="menu-logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
					</Link>
					<a id="menu_close" className="menu-close clse" href="#">
					<i className="fas fa-times" />
					</a>
				</div>
				<ul className="main-nav">
					<li className={pathname.includes('index') ?"active" :""} >
					<Link className="clse" to="/app/index">Home</Link>
					</li>
					<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					

					<a href="">Courses<i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('courses') || pathname.includes('map-list') 
						  ?"has-submenu active" :"has-submenu"}>
						<Link to="/courses">Categories</Link>
						<ul className="submenu">
							{AllCourses&&Categories.map((cat)=>{
								console.log(cat.CoureCat)
								return(
									<li className={pathname.includes('map-list') ?"active" :""}><Link  className="clse"  onClick={()=>Goto(cat.CoureCat)}>{cat.CoureCat}</Link></li>
								)
							})}
								</ul>
						</li>
						<li className={pathname.includes('courses') ?"active" :""}>
							<Link  className="clse" to="/courses">View All</Link>
						</li>
					</ul>
				</li>
				<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					

					<Link to="/admission">Admissions<i className="fas fa-chevron-down" /></Link>
					<ul className="submenu">
						<li>
						<Link  className="clse" to="/admission">Apply Online</Link>
					
						</li>
					</ul>
				</li>	
					<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					<Link to="/registration">Registrations <i className="fas fa-chevron-down" /></Link>
					<ul className="submenu">
						<li className={pathname.includes('voice-call') ?"active" :""}><Link className="clse" to="/registration">Register Online</Link></li>
						
									
						</ul>
					</li>
					<li>
					<Link  className="clse" to="/aboutus" >AboutUs</Link>
					</li>
					<li>
					<Link  className="clse" to="/contactus" >ContactUs</Link>
					</li>
					<li>
					<Link  className="clse" to="/faq" >FAQ</Link>
					</li>
					<li className="login-link">
					<Link  className="clse" to="/login">Login / Signup</Link>
					</li>
				</ul>		 
				</div>		 
				<ul className="nav header-navbar-rht">
					<li className="nav-item">
						<Link  className="nav-link header-register clse" to="/login">Staff Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link header-login clse" to="/register">Staff Register</Link>
					</li>
				</ul> 
				</div>
			</nav>
		</header>
		</div>
  	);

		
}
 
 
export default withRouter(Header);