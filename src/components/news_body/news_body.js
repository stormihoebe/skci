import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import './news_body.css';

export class NewsBody extends Component {
  render() {
   const _onReady =(event)=> {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
   }
   const opts = {
      // height: '390',
      width: '100%',
      playerVars: { 
        autoplay: 1
      }
    };
    return (
      <div>

        <h2>Happy Veteran's Day from SKCI</h2>
        <em>Saturday, November 11</em>
        <Row>
          <Col md={7}>
            <YouTube
              videoId="YyHJfCdi2h8"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
          <Col md={5}>
            <p>
              Today we honor our veterans. Thank you for your service. And thank you to Brian Anderson and his students from Northeast Community College for putting together this video. God bless America.

            </p>
          </Col>
        </Row>
         
      </div>
    );
  }
}