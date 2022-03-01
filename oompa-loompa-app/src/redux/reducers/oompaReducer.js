import actionTypes from "../actions/actionTypes";

function oompasReducer(oompas = [], action) {
    if(action.type === actionTypes.LOAD_OOMPAS){
      return action.oompas;
    } else {
      return oompas;
    }
  }
  export default oompasReducer;