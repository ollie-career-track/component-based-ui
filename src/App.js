import React from 'react';
import Header from './headers/Header';
import Footer from './footers/Footer';
import Character from './characters/Character';

const App = () => (
  <React.Fragment>
    <Header />
    
    <Character 
      img="./assets/jasper.jpg"
      name="Jasper"
      species="Gem"
    />

    <Character 
      img="./assets/spinel.jpg"
      name="Spinel"
      species="Gem"
    />

    <Character 
      img="./assets/peridot.png"
      name="Peridot"
      species="Gem"
    />

    <Character 
      img="./assets/amethyst.jpg"
      name="Amethyst"
      species="Gem"
    />

    <Character 
      img="./assets/garnet.jpg"
      name="Garnet"
      species="Gem"
    />

    <Character 
      img="./assets/steven.png"
      name="Steven Universe"
      species="Human/Gem Hybrid"
    />

    <Character 
      img="./assets/white-diamond.jpg"
      name="White Diamond"
      species="Gem"
    />

    <Character 
      img="./assets/stevonnie.png"
      name="Stevonnie"
      species="Fusion"
    />

    <Character 
      img="./assets/lion.png"
      name="Lion"
      species="Lion"
    />

    <Character 
      img="./assets/malachite.png"
      name="Malachite"
      species="Fusion"
    />

    <Footer />
  </React.Fragment>
);

export default App;
