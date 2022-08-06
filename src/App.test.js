import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import List from "./pages/List";

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});

test("render withouth crahsing", async () => {
  render(<List />);
  const homeButton = await screen.findByText(/Home/i);
  expect(homeButton).toBeInTheDocument();
});

test('search form could be used', async () => { 
  render(<List />)
  const input = await screen.findByRole('textbox')
  fireEvent.change(input, {target: {value: 'cr7'}})

  const getting = await screen.findByText(/Loading.../)
  expect(getting).toBeVisible()
});
