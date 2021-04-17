import { actions } from '../type/index';
import axios from 'axios';
export const getListSuratAPI = () => {
  return (dispatch:any) => {
    dispatch(loading(true));
    axios
      .get('https://api.quran.sutanlab.id/surah')
      .then((res) => {
        let result = res.data;
        dispatch(getListSurat(result.data));
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(getListSurat([]));
        dispatch(loading(false));
      });
  };
};

const getListSurat = (data:any) => {
  return {
    type: actions.GET_LIST_SURAT,
    payload: data,
  };
};

export const getSpecificSuratAPI = (param:any) => {
  return (dispatch:any) => {
    dispatch(loading(true));
    axios
      .get(`https://api.quran.sutanlab.id/surah/${param}`)
      .then((res) => {
        let result = res.data;
        dispatch(getSpecificSurat(result.data));
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(getSpecificSurat({}));
        dispatch(loading(false));
      });
  };
};

const getSpecificSurat = (data:any) => {
  return {
    type: actions.GET_SPECIFIC_SURAT,
    payload: data,
  };
};

const loading = (logic:any) => {
  return {
    type: actions.IS_LOADING,
    payload: logic,
  };
};
