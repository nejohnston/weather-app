import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HeaderBar from '../../components/HeaderBar';
import MapContainer from '../../components/Map';

const useStyles = makeStyles((theme) => ({
  map: { paddingTop: 58 }
}));

const Location = ({ locationList, getSelectedLocation, selectedLocation }) => {
  const classes = useStyles();
  return (
    <div>
      <HeaderBar
        locationList={locationList}
        getSelectedLocation={getSelectedLocation}
        selectedLocation={selectedLocation}
      />
      {selectedLocation !== '' && (
        <div className={classes.map}>
          <MapContainer
            locationList={locationList}
            getSelectedLocation={getSelectedLocation}
            selectedLocation={selectedLocation}
          />
        </div>
      )}
    </div>
  );
};

export default Location;
