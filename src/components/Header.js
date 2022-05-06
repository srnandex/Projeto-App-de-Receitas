import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../CSS/Header.css';

function Header({ titlePage }) {
  const [isSearchBar, setSearchBar] = useState(false);

  const handleClick = () => {
    (setSearchBar(!isSearchBar));
  };

  return (
    <header className="Header">
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile"
        />
      </Link>
      <h2 data-testid="page-title">{ titlePage }</h2>
      <div className="btnHeader">
        <button
          type="button"
          onClick={ handleClick }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search"
          />
        </button>
        {isSearchBar && <SearchBar />}
      </div>
    </header>
  );
}
// teste

Header.propTypes = {
  titlePage: PropTypes.string,
}.isRequired;

export default Header;
