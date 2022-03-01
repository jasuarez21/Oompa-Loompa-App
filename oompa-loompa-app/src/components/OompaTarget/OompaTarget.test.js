import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '../../../test.util';
import { OompaTarget } from './OompaTarget'


const oompa = {
    id: 2, first_name: 'Sakura', last_name: 'Kimoto', profession: 'Developer', image: 'https:77image.com/73473874', gender: 'M'
}
describe('When invoked OompaTarget func', () => {
  test('Wants to contain', () => {
    render(<OompaTarget oompa={oompa}/>);
    expect(screen.getByText(/Developer/i)).toBeInTheDocument();
  });
});