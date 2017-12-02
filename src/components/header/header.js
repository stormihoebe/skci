import React, { Component } from 'react';
import { PopMenu } from '../pop_menu/pop_menu'

import './header.css';


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