import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import DropDownMenu from './DropDownMenu';

const HeaderBar = ({ locationList, getSelectedLocation, selectedLocation }) => (
  <div>
    <AppBar position='fixed' color='default'>
      <Toolbar>
        <DropDownMenu
          locationList={locationList}
          getSelectedLocation={getSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
