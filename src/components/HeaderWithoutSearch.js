import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';

function HeaderWithoutSearch({ titlePage }) {
  return (
    <header>
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="profile"
        />
      </Link>
      <h3 data-testid="page-title">{ titlePage }</h3>
    </header>
  );
}
// teste

HeaderWithoutSearch.propTypes = {
  titlePage: PropTypes.string,
}.isRequired;

export default HeaderWithoutSearch;
