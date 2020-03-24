import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';

class LocationContainer extends Component {
  PropTypes = {
    locationList: PropTypes.array
  };
  render() {
    return (
      <div>
        <Location
          locationList={this.props.locationList}
          selectedLocation={this.props.selectedLocation}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  locationList: state.weather.locationList,
  selectedLocation: state.weather.selectedLocation
});

export default connect(mapStateToProps)(LocationContainer);
