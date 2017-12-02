import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PopMenu } from '../pop_menu/pop_menu'
import './home-header.css';

const logo = require('../../assets/logo.png')

export class HomeHeader extends Component {

  
  render() {

    return (
      <div className="home-header">
        <PopMenu />
        <img 
          src={logo}
          alt="SKCI logo"
          className="header-logo"
        />
        <Row className="header-buttons">
          <Link to='/contact'><Button bsSize="large" className="cta-btn-secondary cta-btn">Get a Quote</Button></Link>
          <Link to='/products'><Button bsSize="large" className="cta-btn-primary cta-btn">See Products</Button></Link>
        </Row>
        <div className="header-text">
          Steve Keiser Crop Insurance is a family owned company supporting Northeastern Nebraska farms, families, and communities. We pride ourselves on providing excellent service as we meet your crop insurance needs. Corn, soy beans, wheat, and everything in between, we've got you covered. 
        </div>
      </div>
    );
  }
}