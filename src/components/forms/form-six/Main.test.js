import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("has correct welcome text", () => {
  render(<Main firstName="John" lastName="Doe" />);
  expect(screen.getByRole("heading")).toHaveTextContent("Welcome, John Doe");
});

test("has correct input value", () => {
  render(<Main firstName="John" lastName="Doe" />);
  expect(screen.getByRole("form")).toHaveFormValues({
    firstName: "John",
    lastName: "Doe",
  });
});
