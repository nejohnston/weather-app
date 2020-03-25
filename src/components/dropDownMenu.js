import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
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
  // const getIndex = (selectedLocation, i) => {
  //   return;
  //   locationList.findIndex(selectedLocation);
  // };
  const handleChange = (event) => {
    getSelectedLocation(event.target.value);
  };
  // const parse = JSON.parse(locationList);
  // var index = .find(function(item, i) {
  //   return item.name === selectedLocation;
  // });
  // console.log(parse);
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
