import React from 'react';
import {AppLogo} from '../constant/imagepath_home';
import { Link } from 'react-router-dom';
import COURSE from '../Home/assets/img/inst7.jpg'
import COURSE2 from '../Home/assets/img/inst2.jpg'
import COURSE3 from '../Home/assets/img/inst3.png'
import COURSE4 from '../Home/assets/img/inst8.jpg'
import COURSE5 from '../Home/assets/img/inst5.jpg'
import COURSE6 from '../Home/assets/img/inst6.jpg'

const Footer = () => {
	
	return (
      <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="subsccribe-item">
           
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <h2 className="footer-title">About ATTI College</h2>
                  <div className="footer-about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Learners</h2>
                  <ul>
                  <li><Link to="/app/Mentee/search">Apply Online</Link></li>
                    <li><Link to="/login">Check Status</Link></li>
                    <li><Link to="/register">Prospectus</Link></li>
                    <li><Link to="/app/Mentee/booking">Registration</Link></li>
                    <li><Link to="/app/Mentee/dashboard-mentee">Check Registration Status</Link></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Staff</h2>
                  <ul>
                  <ul>
                    <li><Link to="/app/Mentor/appointments">Careers</Link></li>
                    <li><Link to="/app/Mentor/chat">Chat</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/app/Mentor/dashboard">FAQ</Link></li>
                  </ul>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-social">
                  <h2 className="footer-title">Instagram</h2>
                  <div className="footer-social-info d-block">
                    <div className="footer-insta-info">
                      <div><img src={COURSE} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE2} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE3} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE4} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE6} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE2} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE4} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE5} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE6} alt="" className="img-fluid" /></div>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="copyright-text text-left">
                    <p>Terms - Privacy Policy &amp; Safety - Send feedback</p>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="copyright-text text-md-right">
                    <p>© {new Date().getFullYear()} Mentoring. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
  );
};

export default Footer;