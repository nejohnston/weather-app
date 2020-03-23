import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';

class LocationContainer extends Component {
  PropTypes = {
    locations: PropTypes.array
  };
  render() {
    const { locations } = this.props.data;
    return (
      <div>
        <Location locations={locations} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  locations: state.location.locations
});
export default connect(mapStateToProps)(LocationContainer);
