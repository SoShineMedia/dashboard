import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemLink href="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      
        <ListItemText primary="Dashboard" />
      </ListItemLink>
      
    </ListItem>
    <ListItem button>
      <ListItemLink href="/schedule">
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>        
          <ListItemText primary="Schedule" />
      </ListItemLink>
    </ListItem>
    <ListItem button>
      <ListItemLink href="/clients">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItemLink>
    </ListItem>
    <ListItem button>
      <ListItemLink href="/invoices">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItemLink>
    </ListItem>
    <ListItem button>
      <ListItemLink href="/matters">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Matters" />
      </ListItemLink>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader>Tools</ListSubheader>
    <ListItem button>
      <ListItemLink href="/creatematter">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="New Matter" />
      </ListItemLink>
    </ListItem>
    <ListItem button>
    <ListItemLink href="/creatematter">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Event" />
      </ListItemLink>
    </ListItem>
    <ListItem button>
    <ListItemLink href="/creatematter">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Report" />
      </ListItemLink>
    </ListItem>
  </div>
);