import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpecificSuratAPI } from '../../redux/actions/quran';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: 'none',
    boxShadow: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function Index(props:any) {
  const classes = useStyles();
  const history = useHistory();
  const { number, numberOfVerses, name, revelation, tafsir } = props.data;
  const dispatch = useDispatch();
  const handleFetchSurat = () => {
    dispatch(getSpecificSuratAPI(number));
  };
  return (
    <Card
      style={{
        borderRadius: '10px',
        paddingLeft: '5px',
        paddingRight: '5px',
      }}
    >
      <CardContent>
        <Grid container direction="column" justify="space-evenly" spacing={3}>
          <Grid
            style={{ cursor: 'pointer' }}
            container
            item
            justify="center"
            alignItems="center"
            onClick={() => {
              handleFetchSurat();
              history.push(
                `/al-quran/surat?name=${name.transliteration.id}&suratNumber=${number}`
              );
            }}
          >
            <Grid
              item
              xs={8}
              container
              justify="flex-start"
              alignItems="flex-start"
              direction="column"
            >
              <Typography title="Click to read surah">
                {number}. QS. {name.transliteration.id}
              </Typography>
              <Typography style={{ fontSize: '12px' }}>
                {name.translation.id}
              </Typography>
              <Typography style={{ fontSize: '12px' }}>
                {revelation.id} | {numberOfVerses} Ayat
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              container
              justify="flex-end"
              alignItems="flex-start"
            >
              <Typography
                title="Click to read surah"
                variant="h3"
                component="h3"
                style={{
                  fontFamily: 'Amiri Regular',
                  fontSize: '25px',
                }}
              >
                {name.short}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: '-20px' }}>
            <Accordion style={{ boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ marginRight: '-15px' }}
              >
                <Typography
                  style={{
                    textAlign: 'right',
                    width: '100%',
                  }}
                  className={classes.heading}
                >
                  Tafsir
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Typography paragraph>{tafsir.id}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
