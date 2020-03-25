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
  render() {
    const { selectedLocation } = this.props;
    return (
      <div style={{ height: '93.8vh', width: '100%' }}>
        <Map
          onCenterChanged
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{
            lat: '54.5855',
            lng: '-125.5466'
          }}
          center={{
            lat: selectedLocation.lat,
            lng: selectedLocation.lng
          }}
        >
          <Marker
            name={selectedLocation.location}
            position={{
              lat: selectedLocation.lat,
              lng: selectedLocation.lng
            }}
          />
          <InfoWindow
            position={{
              lat: selectedLocation.lat,
              lng: selectedLocation.lng
            }}
            visible={true}
          >
            <iframe
              title='iframe'
              src={selectedLocation.weatherURL}
              height='163.45'
              width='300'
            />
          </InfoWindow>
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
