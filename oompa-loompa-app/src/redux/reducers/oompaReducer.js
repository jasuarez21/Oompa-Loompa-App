import actionTypes from "../actions/actionTypes";

function oompasReducer(oompas = [], action) {
    if(action.type === actionTypes.LOAD_OOMPAS){
      return action.oompas;
    } else if(action.type === actionTypes.LOAD_OOMPA_DETAIL) {
      return action.oompa;
    } else {
      return oompas;
    }
  }
  export default oompasReducer;