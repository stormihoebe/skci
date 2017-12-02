import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './contact_body.css';

export class ContactBody extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
         <p>
            We would love to hear from you and help you meet your crop insurance needs. Call today to request ask about our services and request a quote. 
          </p>
          <h2>(402) 388-4945</h2>
          <p>
            SKCI <br />
            88653 US-81  <br />
            Fordyce, NE 68736 <br />
          </p>
          <p>
            402-388-4945 <br />
            email@skcicrop.com <br />
            www.skcicrops.com <br />
          </p>
        </Col>
      </Row>
    );
  }
}