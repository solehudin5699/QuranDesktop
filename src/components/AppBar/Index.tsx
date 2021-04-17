import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  CssBaseline,
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgb(71, 93, 235, 1)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Index({ pageName }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="icon back"
            onClick={() => history.goBack()}
            edge="start"
            className={classes.menuButton}
            style={{ outline: 'none' }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" noWrap>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
