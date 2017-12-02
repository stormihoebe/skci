import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './pop_menu.css';
const menu = require('../../assets/menu.svg')


export class PopMenu extends Component {

  
  render() {
    const popoverClick = (
      <Popover id="popover-trigger-click">
        <Link to='/'><span className="footer-nav-item">Home</span></Link>
        <Link to='/about'><span className="footer-nav-item">About</span></Link>
        <Link to='/news'><span className="footer-nav-item">News</span></Link>
        <Link to='/products'><span className="footer-nav-item">Products</span></Link>
        <Link to='/contact'><span className="footer-nav-item">Contact</span></Link>

      </Popover>
    );

    return (
      <div className={"pop_menu"}>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
          
            <img src={menu} className={"menu_image"} alt={"click for menu"}/>
          
        </OverlayTrigger>
      </div>
    )
  }
}