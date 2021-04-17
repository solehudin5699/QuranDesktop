import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1.5),
    textAlign: 'justify',
    backgroundColor: 'rgba(71, 93, 235, 0.5)',
  },
  toolbar: theme.mixins.toolbar,
}));
export default function Index(props:any) {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </>
  );
}
