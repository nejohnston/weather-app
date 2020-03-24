import React from 'react';
import DropDownMenu from '../../components/DropDownMenu';
import LocationCard from '../../components/LocationCard';

const Location = ({ locationList, getSelectedLocation, selectedLocation }) => (
  <div>
    <DropDownMenu
      locationList={locationList}
      getSelectedLocation={getSelectedLocation}
      selectedLocation={selectedLocation}
    />
    {selectedLocation !== '' && (
      <LocationCard
        selectedLocation={selectedLocation}
        locationList={locationList}
      />
    )}
  </div>
);

export default Location;
