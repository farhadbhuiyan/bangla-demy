import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import teacher from '../../images/promo-teacher.jpg';
import bkash from '../../images/bkash.png';
import rocket from '../../images/rocket.png';
import cityBank from '../../images/city-bank.png';
import visa from '../../images/visa.png';
import express from '../../images/amex-card.png';
import master from '../../images/master-card.png';

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={teacher} alt="" />
          </Col>
          <Col xs={12} md={6}>
            <h1>Become an instructor</h1>
            <p>
              Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="btn btn-primary">Start teaching today</button>
          </Col>
        </Row>
      </Container>

      {/* Footer Area Start Here */}
      <div className="footer-background">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="footer-logo" src={logo} />
              <p>
                Banglademy provides free course for bangladeshi learners.
                It's provided variety of courses which assist learners to improve their technical skills.
              </p>
            </div>
            <div className="col-md-3">
              <h4><b>Quick Links</b></h4>
              <ul className="list-unstyled mt-3">
                <li><a href="#">How it works?</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Career</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Privacy Policy</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4><b>Support</b></h4>
              <ul className="list-unstyled mt-3">
                <li><a href="#">About Us</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Contact Us</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Our Team</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4><b>Contact Us</b></h4>
              <ul className="list-unstyled mt-3">
                <li><a href="#">How it works?</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Career</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Privacy Policy</a></li>
                <div className="mb-2"></div>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment area start here */}
      <div className="payment-options-row">
        <div className="d-flex justify-content-center">
          <div className="payment-options">
            <p className="align-middle">We accept payment via </p>
            <img width="51px" height="23px" title="bKash" alt="bKash" src={bkash} />
            <img width="51px" height="17px" title="Visa" alt="Visa" src={visa} />
            <img width="51px" height="31px" title="Master Card" alt="Master Card" src={master} />
            <img width="51px" height="32px" title="American Express" alt="American Express" src={express} />
            <img width="51px" height="26px" title="Rocket" alt="Rocket" src={rocket} />
            <img width="62px" height="35px" title="City Bank" alt="City Bank" src={cityBank} />
          </div>
        </div>
      </div>
      <div className="col copyright">
        <p className="text-center"> © 2012-2020 Banglademy</p>
      </div>
    </div>
  );
};

export default Footer;