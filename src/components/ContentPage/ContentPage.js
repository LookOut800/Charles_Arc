/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContentPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          {
            this.props.path === '/' ?    null : <h1>{this.props.title}</h1>
          }
          <img className="Header-brandImg" src={require('./images/BurstBlue-web.jpg')} alt="Wave" />
          <img className="Header-brandImg" src={require('./images/Box-Bars-web.jpg')} alt="box bars" />
          <img className="Header-brandImg" src={require('./images/Shell.jpg')} alt="Wave" />
          <img className="Header-brandImg" src={require('./images/Ol-Stump.jpg')} alt="Wave" />

          <div dangerouslySetInnerHTML={{__html: this.props.content || ''}} />
        </div>
      </div>
    );
  }

}

export default ContentPage;
