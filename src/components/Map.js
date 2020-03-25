import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div style={{ height: '95vh', width: '100%' }}>
        <Map
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={
            this.props.selectedLocation === '' ? (
              {
                lat: '54.5855',
                lng: '-125.5466'
              }
            ) : (
              {
                lat: this.props.selectedLocation.lat,
                lng: this.props.selectedLocation.lng
              }
            )
          }
        >
          <Marker
            name={this.props.selectedLocation.location}
            position={{
              lat: this.props.selectedLocation.lat,
              lng: this.props.selectedLocation.lng
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
          {/* {this.props.locationList.weather.map((weather) => (
            <Marker
              name={weather.location}
              position={{
                lat: weather.lat,
                lng: weather.lng
              }}
            />
          ))} */}
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locationList: state.weather.locationList,
  selectedLocation: state.weather.selectedLocation
});

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNLsjmFBfPjyjNOGSnmq_QAdec5n-T0wQ'
})(connect(mapStateToProps)(MapContainer));
