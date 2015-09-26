import React, { PropTypes, Component } from 'react';
import styles from './AboutPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class AboutPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'About Charles';
    this.context.onSetTitle(title);
    return (
      <div className="About">
        <div className="AboutPage-container">
          <div className="AboutPage-content">
          <h2>Hey</h2>
          <p>I am an artist, and a creative full stack developer, dedicated to the intersection of technology, art and design. I spend long hours working in digital and analog environments. My passion lies in contemporary Art and Design</p>
          <span className="cv-fill"></span>
            <h2>Education</h2>
            <ul>
              <li>General Assembly, Web Development Immersive,            2015</li>
              <li>Cranbrook Academy of Art, MFA, Ceramics,              2013</li>
              <li>Skidmore College, BA, French Lit, Studio Art,               2007</li>
            </ul>
          <span id="" className="cv-fill"></span>
            <h2>Technical Experience</h2>
            <p>Software Engineer, Cengage Learning -- 2015</p>
            <p>General Assembly Web Development Immersive program -- 2015</p>
            <p>Cranbrook Academy of Art, MFA -- 2013</p>
          <span className="cv-fill"></span>
            <h2>Skill</h2>
            <p>JavaScript, D3, Ruby, Rails, HTML/CSS, Angular, jQuery, Jasmine, PostgreSQL, MySQL, Git, Agile
            </p>
          <span className="cv-fill"></span>
            <h2>Design Experience</h2>
            <p>Harvard University Ceramics, Studio Technician            2014 - 2015</p>
              <p>Manage Studio Facility, Interns, and Student Experience</p>
            <p>Artist Assistant – Anders Ruhwald, Artist-in-Residence, Cranbrook     2013 - 2014</p>
              <p>Curatorial Assistant to Anders Ruhwald
            Production of exhibitions for Philadelphia Clay Art Center
            Production of design studio objects with artist</p>
            <p>Apprentice – Toshiko Takaezu Studio,              2008 - 2010</p>
              <p>Managed studio and collection for international Artist,
            Produced museum correspondence, including the Okinawa Prefectural Museum
            Production of design studio objects with artist</p>
          <span className="cv-fill"></span>
          </div>
        </div>
      </div>
    );
  }

}

export default AboutPage;
