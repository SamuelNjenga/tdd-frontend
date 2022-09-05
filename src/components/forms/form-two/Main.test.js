import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("onChange event in input field", () => {
  // ARRANGE
  render(<Main />);

  // ACT
  const input = screen.getByPlaceholderText(/age/i);
  const testValue = "20";
  fireEvent.change(input, { target: { value: testValue } });

  // ASSERT
  expect(input.value).toBe("20");
});
