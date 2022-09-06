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

test("handleChange mock function in input field", () => {
  // ARRANGE
  const handleChange = jest.fn();
  const { container } = render(<input type="text" onChange={handleChange} />);
  const input = container.firstChild;
  const testValue = "Samuel";

  // ACT
  fireEvent.change(input, { target: { value: testValue } });

  // ASSERT
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("Samuel");
});

test("select drop-downs must use the fireEvent.change", () => {
  const handleChange = jest.fn();
  const { container } = render(
    <select onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );

  const select = container.firstChild;
  const option1 = container.getElementsByTagName("option").item(0);
  const option2 = container.getElementsByTagName("option").item(1);

  fireEvent.change(select, { target: { value: "2" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(option1.selected).toBe(false);
  expect(option2.selected).toBe(true);
});

test("checkboxes  must use fireEvent.click", () => {
  const handleChange = jest.fn();
  const { container } = render(
    <input type="checkbox" onChange={handleChange} />
  );

  const checkbox = container.firstChild;
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(checkbox.checked).toBe(true);
});
