import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css';

const logo = require('../../assets/logo.png')

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img 
          src={logo}
          alt="SKCI logo"
          className="sidebar-logo"
        />
        <div className="nav-list">
          <span className="nav-item"><Link to='/'>Home</Link></span>
          <span className="nav-item"><Link to='/about'>About</Link></span>
          <span className="nav-item"><Link to='/news'>News</Link></span>
          <span className="nav-item"><Link to='/products'>Products</Link></span>
          <span className="nav-item"><Link to='/contact'>Contact</Link></span>
        </div>
      </div>
    );
  }
}