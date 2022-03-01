import actionTypes from './actionTypes';
import axios from 'axios';

export function loadOompas(){
    return async (dispatch) => {
        try {
          const { data } = await axios('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas');
          dispatch({
            type: actionTypes.LOAD_OOMPAS,
            oompas: data
          });
        } catch (error) {
          dispatch({
            type: 'LOAD_OOMPAS_ERROR'
          });
        }
      };
}