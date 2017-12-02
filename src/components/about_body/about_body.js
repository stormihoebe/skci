import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './about_body.css';

const flag = require('../../assets/flag.png')

export class AboutBody extends Component {
  render() {
    return (
      <div>
        <h1>Our History</h1>
      <Row>
        <Col md={5}>
          <img src={flag} className={"history-img"} alt={"American Flag"}/>
        </Col>
        <Col md={7}>
        <div className="history-text">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to='/contact'><Button bsSize="large" className="cta-btn-secondary cta-btn">Get a Quote</Button></Link>
        </div>
        </Col>
      </Row>
      
      </div>
    );
  }
}