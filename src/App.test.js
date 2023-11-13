import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Login Component', async () => {
  render(<App />);
  const text = await screen.getByText("React Todo List");
  expect(text).toBeInTheDocument();
});
