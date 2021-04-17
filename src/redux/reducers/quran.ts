import { actions } from '../type/index';

const initialState = {
  listSurat: [],
  specificSurat: {},
};

const dataQuranReducers = (prevState = initialState, action:any) => {
  switch (action.type) {
    case actions.GET_LIST_SURAT: {
      return {
        ...prevState,
        listSurat: action.payload,
      };
    }
    case actions.GET_SPECIFIC_SURAT: {
      return {
        ...prevState,
        specificSurat: action.payload,
      };
    }
    default:
      return prevState;
  }
};

export default dataQuranReducers;
