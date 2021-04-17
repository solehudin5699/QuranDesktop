import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RingLoader from 'react-spinners/RingLoader';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
  },
}));

export default function Index(props:any) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <RingLoader
          color={'rgb(71, 93, 235)'}
          loading={props.loading}
          size={150}
        />
      </div>
    </>
  );
}
