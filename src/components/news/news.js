import React, { Component } from 'react'
import{ Sidebar } from './../sidebar/sidebar'
import{ Footer } from './../footer/footer'
import{ Header } from './../header/header'
import{ NewsBody } from './../news_body/news_body'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <Sidebar />
          <div className="main-wrapper">
            <div className="header-container">
              <Header page={"SKCI News"} />
            </div>
              <div className="body-content">
                <NewsBody />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
