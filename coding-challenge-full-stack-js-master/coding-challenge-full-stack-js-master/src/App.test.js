import { render, screen } from '@testing-library/react';
import App from './App';

//I really have no epxerience in testing react components.
test('renders learn react link', () => {
  render(<App />);
  const el = screen.getByText(/hello world/i);
  expect(el).toBeInTheDocument();
});
