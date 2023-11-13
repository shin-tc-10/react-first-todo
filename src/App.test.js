import { render, screen } from '@testing-library/react';
import App from './App';

describe("Test App Component", () => {
  test('render form with React Todo List text', async () => {
    render(<App />);
    const text = await screen.getByText("React Todo List");
    expect(text).toBeInTheDocument();
  })
})
