import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("toggle operation monitored", async () => {
  // ARRANGE
  render(<Main />);

  // ACT
  userEvent.click(screen.getByRole("button"));

  // ASSERT
  expect(screen.getByTitle(/togglestyle/i)).toHaveTextContent(/gold/i);
});
