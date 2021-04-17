import React, { useEffect, useState } from 'react';
import PageContent from '../../components/ContentPage/Index';
import QuranSuratItem from '../../components/QuranSuratItem/Index';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListSuratAPI,
  getSpecificSuratAPI,
} from '../../redux/actions/quran';
import { surat } from '../../surat';
import Drawer from '../../components/Drawer/Index';
import { makeStyles } from '@material-ui/core/styles';
import { Book as BookIcon, Search as SearchIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Input,
  InputAdornment,
} from '@material-ui/core';
import Loading from '../../components/Loading/Index';

const useStyles = makeStyles((theme) => ({
  inputSearch: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: theme.spacing(0, 0, 0, 1),
    width: '95%',
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
  list: {
    color: '#ffffff',
  },
}));
export default function Index() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { listSurat } = useSelector((state:any) => state.quran);
  const { isLoading } = useSelector((state:any) => state.loading);
  useEffect(() => {
    if (!listSurat.length) {
      dispatch(getListSuratAPI());
    }
  }, []);
  interface ResultInterface{
    name:string;
    number:number;
  }
  const [menuSurat, setMenuSurat] = useState<ResultInterface[]>();
  const handleSearch = (e:any) => {
    if(e.key === 'Enter'){
      let result:ResultInterface[] = surat.filter((item) =>
      item.name
        .toString()
        .toLowerCase()
        .includes(e.target.value.toString().toLowerCase())
    );
    setMenuSurat(result);
    }
  };
  useEffect(() => {
    setMenuSurat(surat);
  }, []);
  const handleFetchSurat = (suratName:any, suratNumber:number) => {
    dispatch(getSpecificSuratAPI(suratNumber));
    history.push(
      `/al-quran/surat?name=${suratName}&suratNumber=${suratNumber}`
    );
  };
  return (
    <>
      <Drawer
        pageName="Al-Qur'an"
        customMenu={(drawer:any) => {
          if (!drawer) setMenuSurat(surat);
          return (
            <>
              <div className={classes.searchBox}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Input
                    placeholder="Cari surat"
                    type="search"
                    className={classes.inputSearch}
                    disableUnderline
                    onKeyPress={(e) => handleSearch(e)}
                    endAdornment={
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: 'rgb(71, 93, 235, 1)' }} />
                      </InputAdornment>
                    }
                  />
                </Grid>
              </div>
              <List className={classes.list}>
                {menuSurat?.map((item, index) => (
                  <ListItem
                    key={index.toString()}
                    button
                    onClick={() => {
                      handleFetchSurat(item.name, item.number);
                    }}
                  >
                    <ListItemIcon>
                      <BookIcon style={{ color: '#ffffff' }} />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </>
          );
        }}
      >
        <PageContent>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Grid container spacing={1}>
                {listSurat.map((surat:any, index:any) => {
                  return (
                    <Grid item md={4} sm={6} xs={12}>
                      <QuranSuratItem data={surat} key={index.toString()} />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          )}
        </PageContent>
      </Drawer>
    </>
  );
}
