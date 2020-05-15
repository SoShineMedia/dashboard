import React from 'react';
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';

const events = [
  {
    title: 'Event 1',
    subheader: new Date().toString(),
    description: [ 'Some description for event 1' ],
    icon: <Avatar><Icon>work</Icon></Avatar>,
  },
  {
    title: 'Event 2',
    subheader: new Date().toString(),
    description: [ 'Some description for event 2' ],
    icon: <Avatar><Icon>home</Icon></Avatar>,
  }
];

export default function Metric() {
  return(
     <Timeline events={events}/>
  );
}