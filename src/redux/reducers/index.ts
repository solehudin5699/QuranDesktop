import { combineReducers } from "redux";
import quran from './quran';
import loading from './loading';

const indexReducer = combineReducers({
  quran,
  loading,
});

export default indexReducer;
