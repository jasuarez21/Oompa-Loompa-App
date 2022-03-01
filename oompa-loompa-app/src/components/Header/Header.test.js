import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '../../../test.util';
import { Header } from './Header'


describe('When invoked Header func', () => {
  test('Wants to contain', () => {
    render(<Header />);
    expect(screen.getByText(/Oompa Loompa's Crew/i)).toBeInTheDocument();
  });
});