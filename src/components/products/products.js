import React, { Component } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import{ Sidebar } from './../sidebar/sidebar'
import{ Footer } from './../footer/footer'
import{ Header } from './../header/header'
import{ ProductsBody } from './../products_body/products_body'

const logo = require('../../assets/logo.png')

export class Products extends Component {
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <Sidebar />
          <div className="main-wrapper">
            <div className="header-container">
              <Header page={"Products"} />
            </div>
              <div className="body-content">
                <ProductsBody />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
