import React from 'react';
import Header from './headers/Header';
import Footer from './footers/Footer';
import Character from './characters/Character';

const App = () => (
  <React.Fragment>
    <Header />
    <Character
      img="./assets/evil-morty.png"
      name="Evil Morty"
      species="Human"
    />
    <Footer />
  </React.Fragment>
);

export default App;
