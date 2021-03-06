import React, { Component } from 'react';
import L from "leaflet";
import { moveMap } from "../../actions/mission-actions";
import store from "../../stores/store";

const style = {
  width: "100%",
  height: "500px"
};

const newYorkCoordinates = [40.709465026855469,-73.797340393066406];

export default class Map extends Component {

  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: newYorkCoordinates,
      zoom: 13,
      minZoom: 13,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // bind with store
    store.getState().missionLayer.addTo(this.map);

    this.map.on('moveend ', () => this.notifyAboutMove());
  }

  notifyAboutMove() {
     const bounds = this.map.getBounds();
     const payload = {northEast: bounds.getNorthEast(), southWest: bounds.getSouthWest()};
     store.dispatch(moveMap(payload));
  }

  render() {
    return (
      <div>
        <div id="map" style={style} />
      </div>
    );
  }

}
