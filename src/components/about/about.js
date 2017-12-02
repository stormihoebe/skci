import React, { Component } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import{ Sidebar } from './../sidebar/sidebar'
import{ Footer } from './../footer/footer'
import{ Header } from './../header/header'
import{ AboutBody } from './../about_body/about_body'

const logo = require('../../assets/logo.png')

export class About extends Component {
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <Sidebar />
          <div className="main-wrapper">
            <div className="header-container">
              <Header page={"About SKCI"} />
            </div>
              <div className="body-content">
                <AboutBody />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
