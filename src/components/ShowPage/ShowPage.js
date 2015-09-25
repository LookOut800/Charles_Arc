import React, { PropTypes, Component } from 'react';
import styles from './ShowPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ShowPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Show Objects';
    this.context.onSetTitle(title);
    return (
      <div className="ShowPage">
        <div className="ShowPage-container">
          <h1>Hi there!</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default ShowPage;
