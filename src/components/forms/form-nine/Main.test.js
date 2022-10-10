import { fireEvent, render, screen } from "@testing-library/react";

import Main from "./Main";

test("renders the correct content", async () => {
  // ARRANGE
  render(<Main />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("TODOs");
  expect(screen.getByTestId("new-todo")).toHaveTextContent(
    "What needs to be done?"
  );
  expect(screen.getByLabelText("new-todo")).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Add #1");
  expect(screen.getByText("TODOs")).not.toBeNull();
  expect(screen.getByTestId("new-todo")).not.toBeNull();
  expect(screen.getByText("Add #1")).not.toBeNull();
});

test("allows users to add items to their list", async () => {
  // ARRANGE
  const { getByText, getByLabelText } = render(<Main />);

  // ACT
  const input = getByLabelText("new-todo");
  fireEvent.change(input, { target: { value: "JavaScript Testing" } });
  fireEvent.click(getByText("Add #1"));
  // ASSERT
  expect(screen.getByText("JavaScript Testing")).toBeInTheDocument();
  expect(screen.getByText("Add #2")).toBeInTheDocument();
  expect(screen.getByTestId("new-todo")).toHaveTextContent(
    "What needs to be done?"
  );
});
