import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Default from '../../layout/Default';
import Typography from '@material-ui/core/Typography';

import UserCard from '../../common/UserCard';
import Table from '../../common/Table';

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

            <Grid item xs={12} md={7} lg={9}>

              <Paper className={classes.paper}>
                               
                <Typography variant="h4" >
                    Event title
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Jan 25 2pm (time until)
                </Typography>

                
                <Typography variant="h6" gutterBottom>
                    Address
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Kingston 10
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Subject matter
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Civil dispute meeting
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Here are the details for this event. Here are the details for this event.Here are the details for this event.Here are the details for this event.
                </Typography>
                                
              </Paper>
            </Grid>

            <Grid item xs={12} md={5} lg={3}>
                <UserCard/>
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
                <Table />
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