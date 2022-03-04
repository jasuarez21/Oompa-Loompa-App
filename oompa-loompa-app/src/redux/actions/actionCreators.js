import actionTypes from './actionTypes';
import axios from 'axios';

export function loadOompas(){
    return async (dispatch) => {
        try {
          const { data } = await axios(process.env.REACT_APP_ENV_URL_OOMPAS);
          dispatch({
            type: actionTypes.LOAD_OOMPAS,
            oompas: data
          });
        } catch (error) {
          dispatch({
            type: actionTypes.LOAD_OOMPAS_ERROR
          });
        }
      };
}

export function loadOompasDetail(idOompa){
  return async (dispatch) => {
      try {
        const { data } = await axios(process.env.REACT_APP_ENV_URL_OOMPAS+idOompa);
        dispatch({
          type: actionTypes.LOAD_OOMPA_DETAIL,
          oompa: data
        });
      } catch (error) {
        dispatch({
          type: actionTypes.LOAD_OOMPAS_ERROR
        });
      }
    };
}