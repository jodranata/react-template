import React from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css';

const Header = ({ title }) => {
  return (
    <div className="app-header">
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
