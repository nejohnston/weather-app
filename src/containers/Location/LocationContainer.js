import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';
import { getSelectedLocation } from '../../redux/modules/weather';

class LocationContainer extends Component {
  PropTypes = {
    locationList: PropTypes.array
  };
  render() {
    console.log(this.props.getSelectedLocation);
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
