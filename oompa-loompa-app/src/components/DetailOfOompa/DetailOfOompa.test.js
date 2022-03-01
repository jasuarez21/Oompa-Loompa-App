import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '../../../test.util';
import DetailOfOompa from './DetailOfOompa'

jest.mock('react-redux', () => {
    const ActualRedux = jest.requireActual('react-redux');
    return {
      ...ActualRedux,
      useSelector: () => ({    
                first_name: 'Some oompa',
                gender: 'Women',
                id: 2
      }),
      useDispatch: () => (jest.fn()),
    };
  });

  jest.mock('react-router-dom', () => {
    const ActualReactRouterDom = jest.requireActual('react-router-dom');
    return {
      ...ActualReactRouterDom,
      useParams: () => ({
        id: '2'
      })
    };
  });

describe('When invoked DetailOfOompas func', () => {
  test('Wants to contain', () => {
    render(<DetailOfOompa />, {
        oompa:  {
            first_name: 'Some oompa',
            gender: 'Women',
            id: 2
        }
    });
    expect(screen.getByText(/Some oompa/i)).toBeInTheDocument();
  });
});