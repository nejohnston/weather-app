import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia } from '@material-ui/core';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  itemCardWrapper: {
    padding: '1%',
    width: '100%'
  },
  iframe: {
    padding: 16
  }
}));

const LocationCard = ({ selectedLocation }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemCardWrapper}>
      <Card>
        <CardHeader
          title={selectedLocation.location}
          subtitle={moment(selectedLocation.created).fromNow()}
        />
        <CardMedia className={classes.iframe}>
          <iframe
            title='iframe'
            src={selectedLocation.weatherURL}
            height='163.45'
          />
        </CardMedia>
        {/* <CardTitle
    title={item.title}
    subtitle={item.tags.map((i) => i.title).join(', ')}
  />{' '}
  <CardText>{item.description}</CardText> */}
      </Card>
    </div>
  );
};

export default LocationCard;
