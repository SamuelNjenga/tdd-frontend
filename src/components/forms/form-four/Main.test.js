import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("clear effect via user event clear method", async () => {
  render(<Main />);

  userEvent.type(screen.getByRole(/textbox/i), "samuel");
  expect(screen.getByRole("textbox")).toHaveValue("samuel");

  userEvent.clear(screen.getByRole("textbox"));
  expect(screen.getByRole("textbox")).toHaveValue("");
});

test("clear effect via CLEAR button click event", async () => {
  render(<Main />);

  userEvent.type(screen.getByRole(/textbox/i), "samuel");
  expect(screen.getByRole("textbox")).toHaveValue("samuel");

  userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("textbox")).toHaveValue("");
  expect(screen.getByRole("textbox")).not.toHaveValue("samuel");
});
