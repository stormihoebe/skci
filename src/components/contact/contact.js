import React, { Component } from 'react'
import{ Sidebar } from './../sidebar/sidebar'
import{ Footer } from './../footer/footer'
import{ Header } from './../header/header'
import{ ContactBody } from './../contact_body/contact_body'

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <Sidebar />
          <div className="main-wrapper">
            <div className="header-container">
              <Header page={"Contact SKCI"} />
            </div>
              <div className="body-content">
                <ContactBody />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
