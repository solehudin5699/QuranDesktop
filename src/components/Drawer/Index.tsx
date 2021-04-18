import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
  Toolbar,
  CssBaseline,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import { Menu as MenuIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgba(71, 93, 235, 1)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: 270,
    flexShrink: 0,
    height: '100%',
  },
  drawerPaper: {
    width: 270,
    backgroundColor: 'rgba(71, 93, 235, 0.5)',
  },
  list: {
    color: '#ffffff',
  },
  icon: {
    color: '#ffffff',
  },
}));

export default function Index(props:any) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  // const history = useHistory();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawer(true)}
              edge="start"
              className={classes.menuButton}
              style={{ outline: 'none' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {props.pageName}
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={drawer}
          onClose={() => setDrawer(false)}
          onOpen={() => setDrawer(true)}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {/* <List className={classes.list}>
            <ListItem button onClick={() => history.push('/')}>
              <ListItemIcon>
                <LabelIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Beranda" />
            </ListItem>
            <ListItem button onClick={() => history.push('al-quran')}>
              <ListItemIcon>
                <LabelIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Al-Quran" />
            </ListItem>
            <ListItem button onClick={() => history.push('hadist')}>
              <ListItemIcon>
                <LabelIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Hadist" />
            </ListItem>
            <ListItem button onClick={() => history.push('doa')}>
              <ListItemIcon>
                <LabelIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Do'a" />
            </ListItem>
            <ListItem button onClick={() => history.push('tahlil')}>
              <ListItemIcon>
                <LabelIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Tahlil" />
            </ListItem>
          </List> */}
          {props.customMenu && props.customMenu(drawer)}
          <List
            style={{
              borderTop: '1px solid #FFFFFF',
              borderTopColor: '#FFFFFF',
            }}
          >
            <ListItem button>
              <ListItemText
                primary="Created By Solehudin"
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontSize: '9px',
                }}
              />
            </ListItem>
          </List>
        </SwipeableDrawer>
        {props.children}
      </React.Fragment>
    </div>
  );
}

