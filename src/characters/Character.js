import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species, img }) => (
  <div>
    <img src={img}/>
    <p>Name: {name}</p>
    <p>Species: {species}</p>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Character;
