import { render, screen } from "@testing-library/react";
import List from './pages/List';

test('render withouth crahsing', async () => { 
  render(<List />)
  const homeButton = await screen.findByText(/Home/i);
  expect(homeButton).toBeInTheDocument();
 })