import React from 'react';
import { render, screen } from '../../../test.util';
import ListOfOompas from './ListOfOompas';

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