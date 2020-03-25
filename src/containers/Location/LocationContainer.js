import React, { Component } from 'react';
import MapContainer from '../../components/Map';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';
import { getSelectedLocation } from '../../redux/modules/weather';

class LocationContainer extends Component {
  PropTypes = {
    getSelectedLocation: PropTypes.func,
    locationList: PropTypes.array,
    selectedLocation: PropTypes.object
  };
  render() {
    return (
      <div>
        <Location
          getSelectedLocation={this.props.getSelectedLocation}
          locationList={this.props.locationList}
          selectedLocation={this.props.selectedLocation}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedLocation: (selectedLocation) =>
      dispatch(getSelectedLocation(selectedLocation))
  };
};

const mapStateToProps = (state) => ({
  locationList: state.weather.locationList,
  selectedLocation: state.weather.selectedLocation
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);
