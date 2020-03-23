import React from 'react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import FormControl from './node_modules/@material-ui/core/FormControl';
import Select from './node_modules/@material-ui/core/Select';

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
  const classes = useStyles();
  const [ age, setAge ] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Choose Location:</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          onChange={handleChange}
        >
          {locationList.map((location) => (
            <div>
              <MenuItem value={10}>{location}</MenuItem>
            </div>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;
