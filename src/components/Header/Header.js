/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <Navigation className="Header-nav" />
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Charles : How Heart</h1>
            <p className="Header-bannerDesc">These are recent things happening. </p>
          </div>
          </a>
        </div>
      </div>
    );
  }

}

export default Header;
