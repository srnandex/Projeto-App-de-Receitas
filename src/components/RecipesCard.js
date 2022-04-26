import React from 'react';
import PropTypes from 'prop-types';

const Recipescard = ({ name, src }) => (
  <div>
    <img src={ src } alt={ name } />
    <p>{ name }</p>
  </div>
);

Recipescard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Recipescard;
