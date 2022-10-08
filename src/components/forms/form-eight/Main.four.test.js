import { render, screen } from "@testing-library/react";

test("to be partially checked", async () => {
  render(
    <div>
      <input
        type="checkbox"
        aria-checked="mixed"
        data-testid="aria-checkbox-mixed"
      />
      <input type="checkbox" checked data-testid="input-checkbox-checked" />
      <input type="checkbox" data-testid="input-checkbox-unchecked" />
      <div
        role="checkbox"
        aria-checked="true"
        data-testid="aria-checkbox-checked"
      />
      <div
        role="checkbox"
        aria-checked="false"
        data-testid="aria-checkbox-unchecked"
      />
      <input type="checkbox" data-testid="input-checkbox-indeterminate" />
    </div>
  );

  const ariaCheckboxMixed = screen.getByTestId("aria-checkbox-mixed");
  const inputCheckboxChecked = screen.getByTestId("input-checkbox-checked");
  const inputCheckboxUnchecked = screen.getByTestId("input-checkbox-unchecked");
  const ariaCheckboxChecked = screen.getByTestId("aria-checkbox-checked");
  const ariaCheckboxUnchecked = screen.getByTestId("aria-checkbox-unchecked");
  const inputCheckboxIndeterminate = screen.getByTestId(
    "input-checkbox-indeterminate"
  );

  expect(ariaCheckboxMixed).toBePartiallyChecked();
  expect(inputCheckboxChecked).not.toBePartiallyChecked();
  expect(inputCheckboxUnchecked).not.toBePartiallyChecked();
  expect(ariaCheckboxChecked).not.toBePartiallyChecked();
  expect(ariaCheckboxUnchecked).not.toBePartiallyChecked();

  inputCheckboxIndeterminate.indeterminate = true;
  expect(inputCheckboxIndeterminate).toBePartiallyChecked();
});

test("to have error message", async () => {
  render(
    <div>
      <input
        type="text"
        aria-label="startTime"
        aria-errormessage="msgID"
        aria-invalid="true"
        value="11:30 PM"
      />
      <span id="msgID" aria-live="assertive" style={{ visibility: "visible" }}>
        Invalid time: the time must be between 9:00 AM and 5:00 PM
      </span>
    </div>
  );

  const timeInput = screen.getByLabelText("startTime");

  expect(timeInput).toHaveErrorMessage(
    "Invalid time: the time must be between 9:00 AM and 5:00 PM"
  );
  expect(timeInput).toHaveErrorMessage(/invalid time/i); // to partially match
  expect(timeInput).toHaveErrorMessage(expect.stringContaining("Invalid time")); // to partially match
  expect(timeInput).not.toHaveErrorMessage("Pikachu!");
});
