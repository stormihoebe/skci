import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './footer.css';

const logo = require('../../assets/logo.png')

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <Grid>
        <Row>
          <Col sm={4} className={"footer_nav"}>
            <h3>Site Navigation</h3>
            <Link to='/'><span className="footer-nav-item">Home</span></Link>
            <Link to='/about'><span className="footer-nav-item">About</span></Link>
            <Link to='/news'><span className="footer-nav-item">News</span></Link>
            <Link to='/products'><span className="footer-nav-item">Products</span></Link>
            <Link to='/contact'><span className="footer-nav-item">Contact</span></Link>
          </Col>
          <Col sm={4}><div className={"footer_contact"}>
            <h3>Contact Information</h3>
            <span className="footer-contact-item">402-388-4945</span>
            <span className="footer-contact-item">email@skcicrop.com</span>
            <span className="footer-contact-item">www.skcicrops.com</span>
            <Link to='/contact'><Button className="cta-btn-secondary cta-btn">Get a Quote</ Button></Link>
          </div></Col>
          <Col sm={4}>
            <img 
              src={logo}
              alt="SKCI logo"
              className="footer_logo"
            />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}