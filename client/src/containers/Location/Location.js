import React from 'react';
import DropDownMenu from '../../components/dropDownMenu';

const Location = ({ locationList }) => (
  <div>
    <DropDownMenu locationList={locationList} />
  </div>
);

export default Location;
