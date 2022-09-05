import { render, screen } from "@testing-library/react";
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
  expect(screen.getByRole("button")).toBeDisabled();
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
  expect(screen.getByRole("button")).not.toBeDisabled();
});
