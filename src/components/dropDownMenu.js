import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const DropDownMenu = ({
  locationList,
  getSelectedLocation,
  selectedLocation
}) => {
  const classes = useStyles();
  const handleChange = (event) => {
    getSelectedLocation(event.target.value);
  };
  return (
    <div className={classes.formControl}>
      <InputLabel id='demo-simple-select-label'>Choose Location:</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectedLocation || ''}
        onChange={handleChange}
      >
        {locationList.weather.map((weather) => (
          <MenuItem key={weather.id} value={weather}>
            {weather.location}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDownMenu;
