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

test("deselectOption", async () => {
  render(<Main />);

  userEvent.deselectOptions(screen.getByRole("listbox"), "2");

  expect(screen.getByText("B").selected).toBe(false);
  expect(screen.getByText("B").selected).not.toBe(true);
});

test("selectOptions", () => {
  render(
    <select multiple>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </select>
  );

  userEvent.selectOptions(screen.getByRole("listbox"), ["1", "A"]);
  userEvent.selectOptions(screen.getByRole("listbox"), ["2", "B"]);

  expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
  expect(screen.getByRole("option", { name: "B" }).selected).toBe(true);
  expect(screen.getByRole("option", { name: "C" }).selected).toBe(false);
});
