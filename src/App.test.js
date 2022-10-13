import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the button has correct initial color and text, then changes color and text when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toHaveStyle({ background: 'red' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('the button becomes disabled when the checkbox is checked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkboxBtn = screen.getByRole('checkbox');
  fireEvent.click(checkboxBtn);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkboxBtn);
  expect(colorButton).not.toBeDisabled();
})

test('the button becomes gray when disabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  const checkboxBtn = screen.getByRole('checkbox');
  expect(colorButton).toHaveStyle('backgroundColor: red');
  fireEvent.click(checkboxBtn);
  expect(colorButton).toHaveStyle('backgroundColor: gray');

})