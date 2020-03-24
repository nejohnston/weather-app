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

const DropDownMenu = ({ locationList }) => {
  console.log(locationList.weather);
  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={classes.formControl}>
      <InputLabel id='demo-simple-select-label'>Choose Location:</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={location}
        onChange={handleChange}
      >
        {locationList.weather.map((weather) => (
          <div>
            <MenuItem value={10}>{weather.location}</MenuItem>
          </div>
        ))}
      </Select>
    </div>
  );
};

export default DropDownMenu;
