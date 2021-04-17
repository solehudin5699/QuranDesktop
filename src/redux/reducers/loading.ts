import { actions } from '../type/index';

const initialState = {
  isLoading: false,
};

const loadingReducers = (prevState = initialState, action:any) => {
  switch (action.type) {
    case actions.IS_LOADING: {
      return {
        ...prevState,
        isLoading: action.payload,
      };
    }
    default:
      return prevState;
  }
};

export default loadingReducers;
