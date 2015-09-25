/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Contact Us';
    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h2>Contact</h2>
          <a className="Navigation-link" target='_blank' href='charlesmtalbot.com'>Charlesmtalbot.com</a>
          <p>Charlietalbot at gmail</p>
          <p>Instagram: Blonderrr</p>
          <p>Twitter: @charlietal</p>

        </div>
      </div>
    );
  }

}

export default ContactPage;
