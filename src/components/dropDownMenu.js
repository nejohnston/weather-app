import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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

const DropDownMenu = () => {
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
          <MenuItem value={10}>Dease Lake</MenuItem>
          <MenuItem value={10}>Fort Nelson</MenuItem>
          <MenuItem value={10}>Terrace</MenuItem>
          <MenuItem value={10}>Prince George</MenuItem>
          <MenuItem value={10}>Whistler</MenuItem>
          <MenuItem value={20}>Revelstoke</MenuItem>
          <MenuItem value={30}>Creston</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;
