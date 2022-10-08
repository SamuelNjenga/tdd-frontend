import { render, screen } from "@testing-library/react";

test("to have form values", async () => {
  render(
    <div>
      <form data-testid="login-form">
        <input type="text" name="username" value="jane.doe" />
        <input type="password" name="password" value="12345678" />
        <input type="checkbox" name="rememberMe" checked />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );

  expect(screen.getByTestId("login-form")).toHaveFormValues({
    username: "jane.doe",
    rememberMe: true,
  });
});

test("to have style", async () => {
  render(
    <div>
      <button
        data-testid="delete-button"
        style={{ display: "none", backgroundColor: "red" }}
      >
        Delete item
      </button>
    </div>
  );

  const button = screen.getByTestId("delete-button");

  expect(button).toHaveStyle("display: none");
  expect(button).toHaveStyle({ display: "none" });
  expect(button).toHaveStyle(`
  background-color: red;
  display: none;
`);
  expect(button).toHaveStyle({
    backgroundColor: "red",
    display: "none",
  });
  expect(button).not.toHaveStyle(`
  background-color: blue;
  display: none;
`);
  expect(button).not.toHaveStyle({
    backgroundColor: "blue",
    display: "none",
  });
});

test("to have text content", async () => {
  render(
    <div>
      <span data-testid="text-content">Text Content</span>
    </div>
  );

  const element = screen.getByTestId("text-content");

  expect(element).toHaveTextContent("Content");
  expect(element).toHaveTextContent(/^Text Content$/); // to match the whole content
  expect(element).toHaveTextContent(/content$/i); // to use case-insensitive match
  expect(element).not.toHaveTextContent("content");
});

test("to have value", async () => {
  render(
    <div>
      <input type="text" value="text" data-testid="input-text" />
      <input type="number" value="5" data-testid="input-number" />
      <input type="text" data-testid="input-empty" />
      <select multiple data-testid="select-number">
        <option value="first">First Value</option>
        <option value="second" selected>
          Second Value
        </option>
        <option value="third" selected>
          Third Value
        </option>
      </select>
    </div>
  );

  const textInput = screen.getByTestId("input-text");
  const numberInput = screen.getByTestId("input-number");
  const emptyInput = screen.getByTestId("input-empty");
  const selectInput = screen.getByTestId("select-number");

  expect(textInput).toHaveValue("text");
  expect(numberInput).toHaveValue(5);
  expect(emptyInput).not.toHaveValue();
  expect(selectInput).toHaveValue(["second", "third"]);
});

test("to have display value", async () => {
  render(
    <div>
      <label for="input-example">First name</label>
      <input type="text" id="input-example" value="Luca" />

      <label for="textarea-example">Description</label>
      <textarea id="textarea-example">An example description here.</textarea>

      <label for="single-select-example">Fruit</label>
      <select id="single-select-example">
        <option value="">Select a fruit...</option>
        <option value="banana">Banana</option>
        <option value="ananas">Ananas</option>
        <option value="avocado">Avocado</option>
      </select>

      <label for="multiple-select-example">Fruits</label>
      <select id="multiple-select-example" multiple>
        <option value="">Select a fruit...</option>
        <option value="banana" selected>
          Banana
        </option>
        <option value="ananas">Ananas</option>
        <option value="avocado" selected>
          Avocado
        </option>
      </select>
    </div>
  );

  const input = screen.getByLabelText("First name");
  const textarea = screen.getByLabelText("Description");
  const selectSingle = screen.getByLabelText("Fruit");
  const selectMultiple = screen.getByLabelText("Fruits");

  expect(input).toHaveDisplayValue("Luca");
  expect(input).toHaveDisplayValue(/Luc/);
  expect(textarea).toHaveDisplayValue("An example description here.");
  expect(textarea).toHaveDisplayValue(/example/);
  expect(selectSingle).toHaveDisplayValue("Select a fruit...");
  expect(selectSingle).toHaveDisplayValue(/Select/);
  expect(selectMultiple).toHaveDisplayValue([/Avocado/, "Banana"]);
});

test("to be checked", async () => {
  render(
    <div>
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

      <input
        type="radio"
        checked
        value="foo"
        data-testid="input-radio-checked"
      />
      <input type="radio" value="foo" data-testid="input-radio-unchecked" />
      <div role="radio" aria-checked="true" data-testid="aria-radio-checked" />
      <div
        role="radio"
        aria-checked="false"
        data-testid="aria-radio-unchecked"
      />
      <div
        role="switch"
        aria-checked="true"
        data-testid="aria-switch-checked"
      />
      <div
        role="switch"
        aria-checked="false"
        data-testid="aria-switch-unchecked"
      />
    </div>
  );

  const inputCheckboxChecked = screen.getByTestId("input-checkbox-checked");
  const inputCheckboxUnchecked = screen.getByTestId("input-checkbox-unchecked");
  const ariaCheckboxChecked = screen.getByTestId("aria-checkbox-checked");
  const ariaCheckboxUnchecked = screen.getByTestId("aria-checkbox-unchecked");
  expect(inputCheckboxChecked).toBeChecked();
  expect(inputCheckboxUnchecked).not.toBeChecked();
  expect(ariaCheckboxChecked).toBeChecked();
  expect(ariaCheckboxUnchecked).not.toBeChecked();

  const inputRadioChecked = screen.getByTestId("input-radio-checked");
  const inputRadioUnchecked = screen.getByTestId("input-radio-unchecked");
  const ariaRadioChecked = screen.getByTestId("aria-radio-checked");
  const ariaRadioUnchecked = screen.getByTestId("aria-radio-unchecked");
  expect(inputRadioChecked).toBeChecked();
  expect(inputRadioUnchecked).not.toBeChecked();
  expect(ariaRadioChecked).toBeChecked();
  expect(ariaRadioUnchecked).not.toBeChecked();

  const ariaSwitchChecked = screen.getByTestId("aria-switch-checked");
  const ariaSwitchUnchecked = screen.getByTestId("aria-switch-unchecked");
  expect(ariaSwitchChecked).toBeChecked();
  expect(ariaSwitchUnchecked).not.toBeChecked();
});
