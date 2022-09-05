import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("submit button disabled", async () => {
  // ARRANGE
  render(<Main />);

  // ACT
  const heading = await screen.findByRole("heading");
  userEvent.type(screen.getByPlaceholderText(/name/i), "sam");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent(/hello there/i);
  expect(heading).toHaveTextContent(/hello there/i);
  expect(screen.getByText("SUBMIT")).toBeDisabled();
});

test("submit button enabled ", async () => {
  // ARRANGE
  render(<Main />);

  // ACT
  const heading = await screen.findByRole("heading");
  userEvent.type(screen.getByPlaceholderText(/name/i), "samuel");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent(/hello there/i);
  expect(heading).toHaveTextContent(/hello there/i);
  expect(screen.getByText("SUBMIT")).not.toBeDisabled();
});

test("submit button clicked", async () => {
  // ARRANGE
  render(<Main />);

  // ACT
  userEvent.type(screen.getByPlaceholderText(/name/i), "samuel");
  fireEvent.click(screen.getByText("SUBMIT"));

  // ASSERT
  expect(screen.getByText("SUBMIT")).toHaveTextContent("SUBMIT");
  expect(screen.getByRole("alert")).toHaveTextContent("SUCCESSFUL");
});

test("reset button clicked", async () => {
  // ARRANGE
  render(<Main />);

  // ACT
  const inputText = screen.getByPlaceholderText(/name/i);
  fireEvent.click(screen.getByText("RESET"));

  // ASSERT
  expect(screen.getByText("RESET")).toHaveTextContent("RESET");
  expect(inputText).toHaveTextContent("");
});
