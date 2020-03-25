import React from 'react';
import { AppBar } from '@material-ui/core';
import DropDownMenu from './DropDownMenu';
import LocationCard from './LocationCard';

const HeaderBar = ({ locationList, getSelectedLocation, selectedLocation }) => (
  <div>
    <AppBar>
      <DropDownMenu
        locationList={locationList}
        getSelectedLocation={getSelectedLocation}
        selectedLocation={selectedLocation}
      />
    </AppBar>
    {selectedLocation.length !== 0 && (
      <div>
        <LocationCard
          selectedLocation={selectedLocation}
          locationList={locationList}
        />
      </div>
    )}
  </div>
);

export default HeaderBar;
