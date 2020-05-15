import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme)=>({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 140,
  },
}));

export default function Metric() {
  const classes = useStyles();
  const fixedHeightMetric = clsx(classes.paper, classes.fixedHeight);
  
  return (
    <React.Fragment>
      {/*<Title>Recent Deposits</Title>*/}
      <Grid item xs={12} md={4} lg={2}>
      <Paper className={fixedHeightMetric}>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
      <Paper className={fixedHeightMetric}>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
      <Paper className={fixedHeightMetric}>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Paper>
      </Grid>
      
    </React.Fragment>
  );
}