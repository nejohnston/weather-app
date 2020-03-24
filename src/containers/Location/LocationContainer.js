import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';

class LocationContainer extends Component {
  PropTypes = {
    locationList: PropTypes.array
  };
  componentWillMount() {}
  render() {
    return (
      <div>
        <Location locationList={this.props.locationList} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  locationList: state.weather.locationList
});
export default connect(mapStateToProps)(LocationContainer);
