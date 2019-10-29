import React from 'react';
import PropTypes from 'prop-types'

const Character = ({ name, species, img }) => (
  <img></img>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Character;
