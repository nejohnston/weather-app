import React from 'react';
import DropDownMenu from '../../components/dropDownMenu';

const Location = ({ locations }) => (
  <div>
    <DropDownMenu locations={locations} />
  </div>
);

export default Location;
