import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

test("to be disabled", async () => {
  render(
    <div>
      <button data-testid="button" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input type="text" data-testid="input" />
      </fieldset>
      <a href="..." disabled>
        link
      </a>
    </div>
  );
  expect(screen.getByTestId("button")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByText("link")).not.toBeDisabled();
});

test("to be empty dom element", async () => {
  render(
    <div>
      <span data-testid="not-empty">
        <span data-testid="empty"></span>
      </span>
      <span data-testid="with-whitespace"> </span>
      <span data-testid="with-comment">{/*comment*/}</span>
    </div>
  );
  expect(screen.getByTestId("empty")).toBeEmptyDOMElement();
  expect(screen.getByTestId("not-empty")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-whitespace")).not.toBeEmptyDOMElement();
});

test("to be in the dom", async () => {
  render(
    <div>
      <span data-testid="html-element">
        <span>Html Element</span>
      </span>
      <svg data-testid="svg-element"></svg>
    </div>
  );
  expect(screen.getByTestId("html-element")).toBeInTheDocument();
  expect(screen.getByTestId("svg-element")).toBeInTheDocument();
  expect(screen.queryByTestId("does-not-exist")).not.toBeInTheDocument();
});

test("to be invalid", async () => {
  render(
    <div>
      <input data-testid="no-aria-invalid" />
      <input data-testid="aria-invalid" aria-invalid />
      <input data-testid="aria-invalid-value" aria-invalid="true" />
      <input data-testid="aria-invalid-false" aria-invalid="false" />

      <form data-testid="valid-form">
        <input />
      </form>

      <form data-testid="invalid-form">
        <input required />
      </form>
    </div>
  );

  expect(screen.getByTestId("no-aria-invalid")).not.toBeInvalid();
  expect(screen.getByTestId("aria-invalid")).toBeInvalid();
  expect(screen.getByTestId("aria-invalid-value")).toBeInvalid();
  expect(screen.getByTestId("aria-invalid-false")).not.toBeInvalid();
  expect(screen.getByTestId("valid-form")).not.toBeInvalid();
  expect(screen.getByTestId("invalid-form")).toBeInvalid();
});

test("to be required", async () => {
  render(
    <div>
      <input data-testid="required-input" required />
      <input data-testid="aria-required-input" aria-required="true" />
      <input data-testid="conflicted-input" required aria-required="false" />
      <input data-testid="aria-not-required-input" aria-required="false" />
      <input data-testid="optional-input" />
      <input data-testid="unsupported-type" type="image" required />
      <select data-testid="select" required></select>
      <textarea data-testid="textarea" required></textarea>
      <div data-testid="supported-role" role="tree" required></div>
      <div
        data-testid="supported-role-aria"
        role="tree"
        aria-required="true"
      ></div>
    </div>
  );
  expect(screen.getByTestId("required-input")).toBeRequired();
  expect(screen.getByTestId("aria-required-input")).toBeRequired();
  expect(screen.getByTestId("conflicted-input")).toBeRequired();
  expect(screen.getByTestId("aria-not-required-input")).not.toBeRequired();
  expect(screen.getByTestId("optional-input")).not.toBeRequired();
  expect(screen.getByTestId("unsupported-type")).not.toBeRequired();
  expect(screen.getByTestId("select")).toBeRequired();
  expect(screen.getByTestId("textarea")).toBeRequired();
  expect(screen.getByTestId("supported-role")).not.toBeRequired();
  expect(screen.getByTestId("supported-role-aria")).toBeRequired();
});

test("to be visible", async () => {
  render(
    <div>
      <div data-testid="zero-opacity" style={{ opacity: "0" }}>
        Zero Opacity Example
      </div>
      <div data-testid="visibility-hidden" style={{ visibility: "hidden" }}>
        Visibility Hidden Example
      </div>
      <div data-testid="display-none" style={{ display: "none" }}>
        Display None Example
      </div>
      <div style={{ opacity: "0" }}>
        <span data-testid="hidden-parent">Hidden Parent Example</span>
      </div>
      <div data-testid="visible">Visible Example</div>
      <div data-testid="hidden-attribute" hidden>
        Hidden Attribute Example
      </div>
      <details>
        <summary>Title of hidden text</summary>
        Hidden Details Example
      </details>
      <details open>
        <summary>Title of visible text</summary>
        <div>Visible Details Example</div>
      </details>
    </div>
  );
  expect(screen.getByText("Zero Opacity Example")).not.toBeVisible();
  expect(screen.getByText("Visibility Hidden Example")).not.toBeVisible();
  expect(screen.getByText("Display None Example")).not.toBeVisible();
  expect(screen.getByText("Hidden Parent Example")).not.toBeVisible();
  expect(screen.getByText("Visible Example")).toBeVisible();
  expect(screen.getByText("Hidden Attribute Example")).not.toBeVisible();
  expect(screen.getByText("Hidden Details Example")).not.toBeVisible();
  expect(screen.getByText("Visible Details Example")).toBeVisible();
});
