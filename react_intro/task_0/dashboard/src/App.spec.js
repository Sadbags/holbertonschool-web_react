import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the header, body, and footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-header')).toBeInTheDocument();
    expect(container.querySelector('.App-body')).toBeInTheDocument();
    expect(container.querySelector('.App-footer')).toBeInTheDocument();
  });
});


  test('renders the login and footer paragraphs', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(/copyright/i);
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });
