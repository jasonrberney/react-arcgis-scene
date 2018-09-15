import React, {Component} from 'react';
import esriLoader from 'esri-loader';
import './App.css';
import { Scene } from 'react-arcgis';
import BermudaTriangle from './BermudaTriangle.js'; // The Graphic component we just made 

export default class App extends Component {
  constructor() {
    super();

    // esriLoader.loadModules([
    //   'esri/Map',
    //   'esri/views/MapView',
    // ], options)
    //     .then(([Map, MapView]) => {
    //       let map = new Map({
    //         basemap: "gray-vector"
    //       });

    //       let view = new MapView({
    //         map: map,
    //         container: "mapContainer",
    //         basemap: 'gray-vector',
    //         center: [-100, 30],
    //         zoom: 5
    //       });

    //       this.setState({
    //         map,
    //         view
    //       })
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
  }

  onClick() {

  }

  render() {
    return (
      <Scene class="mapContainer"
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-80.4443, 25.2529],
            zoom: 6
        }}>
        <BermudaTriangle />
      </Scene>
        // <div className="App">
        //   <div className="App-header">
        //     <h1>Welcome to ESRI React App</h1>
        //     <button onClick={this.onClick}>Move to Portland</button>
        //   </div>
        //   <div id="mapContainer"/>
        // </div>
    );
  }
}
