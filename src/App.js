import React, {Component} from 'react';
import esriLoader from 'esri-loader';
import './App.css';
import { Scene } from 'react-arcgis';
import BermudaTriangle from './BermudaTriangle.js'; // The Graphic component we just made 
import FlyToControl from './FlyToControl.js';

export default class App extends Component {
  constructor() {
    super();

  }

  onClick() {

  }

  render() {
    return (
      <div>
        <Scene class="mapContainer"
          mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [-80.4443, 25.2529],
              zoom: 6
          }}>
          <FlyToControl />
          <BermudaTriangle />
        </Scene>
      </div>
    );
  }
}
