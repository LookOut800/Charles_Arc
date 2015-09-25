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
          <h2>Profile</h2>
  <p>I am a creative full stack developer, dedicated to the intersection of technology, art and design. I can build responsive web applications, and have spent long hours designing in both digital and analog environments. My passion lies in contemporary Art and Design, and I'm looking for web development opportunities that will allow me to integrate my creative background to execute impactful ideas.</p>
<span class="cv-fill"></span>
  <h2>Tech Skills</h2>
  <p>JavaScript, D3, Ruby, Rails, HTML/CSS, Angular, jQuery, Jasmine, PostgreSQL, MySQL, Git, Agile
  </p>
<span class="cv-fill"></span>
  <h2>Technical Experience</h2>
  <p>Software Engineer, Cengage Learning -- 2015</p>
  <p>General Assembly Web Development Immersive program -- 2015
    Built and deployed three web based applications</p>
  <p>Cranbrook Academy of Art, MFA
    Learned design fundamentals while producing studio design objects -- 2013</p>
<span class="cv-fill"></span>
  <h2>Projects</h2>
  <h4><a href="http://four-Walls-App.herokuapp.com" title="four walls link">Four Walls</a></h4>
  <p> An image sharing platform for creative projects using ruby on rails</p>
  <h4><a href="http://lookout800.github.io/Soap_Stone_App/#/" title="soap stone link">SoapStone</a></h4>
  <p> A research tool built for querying museum collections, and creating personal feeds</p>
<span class="cv-fill"></span>
  <h2>Design Experience</h2>
  <p>Harvard University Ceramics, Studio Technician            2014 - 2015
    Manage Studio Facility, Interns, and Student Experience</p>
  <p>Artist Assistant – Anders Ruhwald, Artist-in-Residence, Cranbrook     2013 - 2014
    Curatorial Assistant to Anders Ruhwald
  Production of exhibitions for Philadelphia Clay Art Center
  Production of design studio objects with artist</p>
  <p>Apprentice – Toshiko Takaezu Studio,              2008 - 2010
    Managed studio and collection for international Artist,
  Produced museum correspondence, including the Okinawa Prefectural Museum
  Production of design studio objects with artist</p>
<span class="cv-fill"></span>
  <h2>Education</h2>
  <ul>
    <li>General Assembly, Web Development Immersive,            2015</li>
    <li>Cranbrook Academy of Art, MFA, Ceramics,              2013</li>
    <li>Skidmore College, BA, French Lit, Studio Art,               2007</li>
  </ul>
  <a id="bottom" href="" title="">Bottom</a>
<span id="" class="cv-fill"></span>
  <h2>Interests</h2>
  <ul>
    <li>Web development</li>
    <li>design</li>
    <li>sailing</li>
    <li>French lit</li>
    <li>making pottery</li>
  </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default AboutPage;
