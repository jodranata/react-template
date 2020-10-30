import React from 'react';
import Icon from '../images/favicon.png';
import '../css/Section.css';

const Section = () => {
  return (
    <div className="app-section">
      <p>A React Template</p>
      <img src={Icon} alt="Profile" />
    </div>
  );
};

export default Section;
