import React from 'react';
import DropDownMenu from '../../components/dropDownMenu';

const Location = ({ locationList, getSelectedLocation, selectedLocation }) => (
  <div>
    <DropDownMenu
      locationList={locationList}
      getSelectedLocation={getSelectedLocation}
      selectedLocation={selectedLocation}
    />
  </div>
);

export default Location;
