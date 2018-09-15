import React, {Component} from 'react';
import esriLoader from 'esri-loader';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    esriLoader.loadModules([
      'esri/Map',
      'esri/views/MapView',
    ], options)
        .then(([Map, MapView]) => {
          let map = new Map({
            basemap: "gray-vector"
          });

          let view = new MapView({
            map: map,
            container: "mapContainer",
            basemap: 'gray-vector',
            center: [-100, 30],
            zoom: 5
          });

          this.setState({
            map,
            view
          })
        })
        .catch(err => {
          console.error(err);
        });
  }

  onClick() {

  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h1>Welcome to ESRI React App</h1>
            <button onClick={this.onClick}>Move to Portland</button>
          </div>
          <div id="mapContainer"/>
        </div>
    );
  }
}
