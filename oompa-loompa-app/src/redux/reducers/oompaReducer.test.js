import oompasReducer from "./oompaReducer";
import actionTypes from "../actions/actionTypes";

describe('when oompareducer being called to reduce with a type LOAD_OOMPAS:', () => {
    test('return and array', () => {
      const state = [];
      const action = { type: actionTypes.LOAD_OOMPAS, oompas: 'object of oompas' };
      const returnFunc = oompasReducer(state, action);
      const expectTo = action.oompas;
      expect(returnFunc).toEqual(expectTo);
    });
});

describe('when oompareducer being called to reduce with a type LOAD_OOMPAS_DETAIL:', () => {
    test('return and array', () => {
      const state = [];
      const action = { type: actionTypes.LOAD_OOMPA_DETAIL, oompa: 'object of oompa selected' };
      const returnFunc = oompasReducer(state, action);
      const expectTo = action.oompa;
      expect(returnFunc).toEqual(expectTo);
    });
});

describe('when oompareducer being called to reduce with a diferent type:', () => {
    test('return and array', () => {
      const oompas = [];
      const action = { type: actionTypes.LOAD_OOMPAS_ERROR, oompa: 'object of oompa selected' };
      const returnFunc = oompasReducer(oompas, action);
      const expectTo = action.oompa;
      expect(returnFunc).toEqual(oompas);
    });
});
  