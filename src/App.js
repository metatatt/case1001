import React from 'react';
import './resources/style.css';
import { Element } from "react-scroll";
import Aframe1 from './Compomemts/Aframe1';
import Aframe2 from './Compomemts/Aframe2';

function App() {


  return (
    <div className="App">
      <Element name="start-events">
      <Aframe1 />
      <Aframe2 />
      </Element>

    </div>
  );
}

export default App;
