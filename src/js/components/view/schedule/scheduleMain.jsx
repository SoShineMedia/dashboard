import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Default from '../../layout/Default';
import Timeline from '../../common/Timeline';
import Stream from '../../common/List';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
}));

  
function Display() {
    const classes = useStyles();  
    
  return (
    <React.Fragment>
          <Grid container spacing={3}>
       
            {/* Recent Orders */}
            <Grid item xs={12} md={6} lg={5}>
              <Paper className={classes.paper}>
                <h2>Schedule</h2>
                <Stream />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={7}>
              <Paper className={classes.paper}>
                <h2>Activity Timeline</h2>
                <Timeline />
              </Paper>
            </Grid>
            
          </Grid>
          
    </React.Fragment>   
  );
}


export default function Schedule() {  
  return (
        <Default page={Display()} />
  );
}