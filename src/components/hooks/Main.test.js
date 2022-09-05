import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("count incremented on click", async () => {
  // ARRANGE
  render(<Main />);

  expect(screen.getByRole("button")).toHaveTextContent("1");

  // ACT
  fireEvent.click(screen.getByRole("button"));

  // ASSERT
  expect(screen.getByRole("button")).toHaveTextContent("2");
});
