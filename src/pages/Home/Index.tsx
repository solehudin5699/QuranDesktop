import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Drawer from '../../components/Drawer/Index';
import ContentPage from '../../components/ContentPage/Index';

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
  inputSearch: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: theme.spacing(0, 0, 0, 1),
  },
  drawer: {
    width: 270,
    flexShrink: 0,
    height: '100%',
  },
  drawerPaper: {
    width: 270,
  },
  searchBox: {
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgb(71, 93, 235, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(0, 0, 0, 1),
    margin: 0,
    zIndex: 100,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  search: {
    marginRight: theme.spacing(0),
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1.5),
    textAlign: 'justify',
  },
  toolbar: theme.mixins.toolbar,
  containerMenu: {
    marginBottom: '10px',
    borderRadius: '15px',
    padding: '5px',
    height: '250px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundImage:
      'linear-gradient(to bottom, #475deb, #0091fc, #3ab9fa, #99dcf3)',
  },
  menuItem: {
    fontFamily: 'Poppins',
    fontSize: '19px',
    color: theme.palette.primary.contrastText,
  },
}));

export default function Index() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Drawer pageName="Mari Baca Al-Qur'an">
        <ContentPage>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6} sm={4} container justify="center" alignItems="center">
              <Card
                className={classes.containerMenu}
                onClick={() => history.push('/al-quran')}
              >
                <CardContent>
                  <Typography className={classes.menuItem}>
                    Al-Qur'an
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} container justify="center" alignItems="center">
              <Card
                className={classes.containerMenu}
                onClick={() => history.push('hadist')}
              >
                <CardContent>
                  <Typography className={classes.menuItem}>Hadist</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} container justify="center" alignItems="center">
              <Card
                className={classes.containerMenu}
                onClick={() => history.push('doa')}
              >
                <CardContent>
                  <Typography className={classes.menuItem}>Do'a</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} container justify="center" alignItems="center">
              <Card className={classes.containerMenu}>
                <CardContent>
                  <Typography className={classes.menuItem}>Tahlil</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </ContentPage>
      </Drawer>
    </>
  );
}
