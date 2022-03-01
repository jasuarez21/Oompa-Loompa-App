
import { combineReducers } from 'redux';
import oompaReducer from './oompaReducer';


const rootReducer = combineReducers({
  oompas: oompaReducer
});

export default rootReducer;