import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Img from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),      
    },
  },
  center: {
      textAlign:"center",
      margin:theme.spacing(0),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Avatar(props) {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.root}> 
            <Img alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}  />
            <p>
                <strong>Full Name</strong>
            </p>
        </div>
        <p className={classes.center}>
            <span>Lawyer</span>
            <br/>
            <Link onClick={props.close} variant="inherited" color="primary" href="/firm">Law Firm</Link>
        </p>
    </div>
    
  );
}