import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap'

import './home-body.css';

const comingSoon = require('../../assets/liveD.png')
const logo = require('../../assets/logo.png')

export class HomeBody extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
          <h2>Current Market Data</h2>
          <div>
            <img src={comingSoon} className="market-data-cs"/>
          </div>
          <span className="marget-data-disclaimer">All market data contained within the SKCI website should be considered as a reference only.</span>
        </Col>
        <Col md={4}>
          <h3>Local Market Links</h3>
            <a href="http://us92.com/"><span className="market-link-item">US92</span></a>
            <a href="http://www.farmerspridecoop.com/"><span className="market-link-item">Farmer’s Pride</span></a>
            <a href="http://www.8120grain.com/"><span className="market-link-item">8120</span></a>
            <a href="http://www.huskerag.com/"><span className="market-link-item">Husker Ag.</span></a>
            <a href="http://siouxlandethanol.com/"><span className="market-link-item">Siouxland Ethenol</span></a>
            <a href="https://www.adm.com/"><span className="market-link-item">Adm Columbus</span></a>
        </Col>
      </Row>
    );
  }
}