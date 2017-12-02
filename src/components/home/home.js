import React, { Component } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import{ Sidebar } from './../sidebar/sidebar'
import{ Footer } from './../footer/footer'
import{ HomeHeader } from './../home-header/home-header'
import{ HomeBody } from './../home-body/home-body'

const logo = require('../../assets/logo.png')

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <Sidebar />
          <div className="main-wrapper">
            <div className="header-container">
              <HomeHeader />
            </div>
            <div className="body-content">
              <HomeBody />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
