import axios from 'axios';
import { loadOompasDetail, loadOompas } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('When invoked a loadOompas function', () => {
    it('Should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce('Oompas object');
        await loadOompas()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
})

describe('When invoked a loadOompasDetail function', () => {
    it('Should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce('Oompas object');
        await loadOompasDetail()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
})
