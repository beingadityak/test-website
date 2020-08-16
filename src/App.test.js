import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders beingadityak link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/app by @beingadityak/i);
  expect(linkElement).toBeInTheDocument();
});
