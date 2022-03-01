import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '../../../test.util';
import ListOfOompas from './ListOfOompas';

jest.mock('react-redux', () => {
    const ActualRedux = jest.requireActual('react-redux');
    return {
      ...ActualRedux,
      useSelector: () => ({
        oompas: [
            'Oompas name'
        ]
      }),
      useDispatch: () => (jest.fn())
    };
  });

describe('When invoked ListOfOompas func', () => {
  test('Wants to contain', () => {
    render(<ListOfOompas />, {
      initialState: {
        oompas: [{name: 'Oompa'}]
      }
    });
    expect(screen.getByText(/Find your Oompa-Loompa/i)).toBeInTheDocument();
  });
});