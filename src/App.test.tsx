import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the math problem', () => {
  render(<App />);
  // The app shows Hebrew text "חשבון פשוט" (Simple Math)
  expect(screen.getByText('חשבון פשוט')).toBeInTheDocument();
  // Should have a problem displayed (e.g., "5 + 3")
  expect(screen.getByRole('img')).toBeInTheDocument(); // logo
});

test('shows answer hint when checking a problem', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('?');
  const checkButton = screen.getByText('✅');

  // Enter a number and check
  fireEvent.change(input, { target: { value: '42' } });
  fireEvent.click(checkButton);

  // Should show some hint (either correct or incorrect)
  const hint = screen.getByText(/כל הכבוד|נמוך מידי|גבוה מידי/);
  expect(hint).toBeInTheDocument();
});
