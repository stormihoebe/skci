import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import { PopMenu } from '../pop_menu/pop_menu'

import './header.css';

const logo = require('../../assets/logo.png')

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <PopMenu />
        <h1>{this.props.page}</h1>
      </div>
    );
  }
}