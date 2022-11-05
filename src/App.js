import logo from './logo.svg';
import React from "react";
import './App.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export default class App extends React.Component{
    componentDidMount() {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
    }

    render(){
      return (
          <div id="map"></div>
      );
  }
}
