import React from 'react';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from '@material-ui/core';

import moment from 'moment';

// import './styles.css';

const LocationCard = ({ selectedLocation }) => (
  <div className='itemCardWrapper'>
    <Card>
      {/* <CardMedia>
        <iframe src={item.imageurl} alt='image' />
      </CardMedia> */}
      <CardHeader
        title={selectedLocation}
        subtitle={moment(selectedLocation.created).fromNow()}
      />
      {/* <CardTitle
        title={item.title}
        subtitle={item.tags.map((i) => i.title).join(', ')}
      />{' '}
      <CardText>{item.description}</CardText> */}
    </Card>
  </div>
);

export default LocationCard;
