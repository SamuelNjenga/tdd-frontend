import { render, screen } from "@testing-library/react";

test("to contain element", async () => {
  render(
    <div>
      <span data-testid="ancestor">
        <span data-testid="descendant"></span>
      </span>
    </div>
  );

  const ancestor = screen.getByTestId("ancestor");
  const descendant = screen.getByTestId("descendant");
  //   const nonExistantElement = screen.getByTestId("does-not-exist");

  expect(ancestor).toContainElement(descendant);
  expect(descendant).not.toContainElement(ancestor);
  //   expect(ancestor).not.toContainElement(nonExistantElement);
});

test("to contain HTML", async () => {
  render(
    <div>
      <span data-testid="parent">
        <span data-testid="child"></span>
      </span>
    </div>
  );
  expect(screen.getByTestId("parent")).toContainHTML(
    '<span data-testid="child"></span>'
  );
  expect(screen.getByTestId("parent")).toContainHTML(
    '<span data-testid="child" />'
  );
  expect(screen.getByTestId("parent")).not.toContainHTML("<br />");
});

test("to have accessible description", async () => {
  render(
    <div>
      <a
        data-testid="link"
        href="/"
        aria-label="Home page"
        title="A link to start over"
      >
        Start
      </a>
      <a data-testid="extra-link" href="/about" aria-label="About page">
        About
      </a>
      <img src="avatar.jpg" data-testid="avatar" alt="User profile pic" />
      <img
        src="logo.jpg"
        data-testid="logo"
        alt="Company logo"
        aria-describedby="t1"
      />
      <span id="t1" role="presentation">
        The logo of Our Company
      </span>
    </div>
  );
  expect(screen.getByTestId("link")).toHaveAccessibleDescription();
  expect(screen.getByTestId("link")).toHaveAccessibleDescription(
    "A link to start over"
  );
  expect(screen.getByTestId("link")).not.toHaveAccessibleDescription(
    "Home page"
  );
  expect(screen.getByTestId("extra-link")).not.toHaveAccessibleDescription();
  expect(screen.getByTestId("avatar")).not.toHaveAccessibleDescription();
  expect(screen.getByTestId("logo")).not.toHaveAccessibleDescription(
    "Company logo"
  );
  expect(screen.getByTestId("logo")).toHaveAccessibleDescription(
    "The logo of Our Company"
  );
});

test("to have accessible description", async () => {
  render(
    <div>
      <img data-testid="img-alt" src="" alt="Test alt" />
      <img data-testid="img-empty-alt" src="" alt="" />
      <svg data-testid="svg-title">
        <title>Test title</title>
      </svg>
      <button data-testid="button-img-alt">
        <img src="" alt="Test" />
      </button>
      <p>
        <img data-testid="img-paragraph" src="" alt="" /> Test content
      </p>
      <p>
        <button data-testid="svg-button">
          <svg>
            <title>Test</title>
          </svg>
        </button>
      </p>
      <div>
        <svg data-testid="svg-without-title"></svg>
      </div>
      <input data-testid="input-title" title="test" />
    </div>
  );
  expect(screen.getByTestId("img-alt")).toHaveAccessibleName("Test alt");
  expect(screen.getByTestId("img-empty-alt")).not.toHaveAccessibleName();
  expect(screen.getByTestId("svg-title")).toHaveAccessibleName("Test title");
  expect(screen.getByTestId("button-img-alt")).toHaveAccessibleName();
  expect(screen.getByTestId("img-paragraph")).not.toHaveAccessibleName();
  expect(screen.getByTestId("svg-button")).toHaveAccessibleName();
  expect(screen.getByTestId("svg-without-title")).not.toHaveAccessibleName();
  expect(screen.getByTestId("input-title")).toHaveAccessibleName();
});

test("to have attribute", async () => {
  render(
    <div>
      <button data-testid="ok-button" type="submit" disabled>
        ok
      </button>
    </div>
  );

  const button = screen.getByTestId("ok-button");

  expect(button).toHaveAttribute("disabled");
  expect(button).toHaveAttribute("type", "submit");
  expect(button).not.toHaveAttribute("type", "button");

  expect(button).toHaveAttribute("type", expect.stringContaining("sub"));
  expect(button).toHaveAttribute("type", expect.not.stringContaining("but"));
});

test("to have class", async () => {
  render(
    <div>
      <button data-testid="delete-button" class="btn extra btn-danger">
        Delete item
      </button>
      <button data-testid="no-classes">No Classes</button>
    </div>
  );

  const deleteButton = screen.getByTestId("delete-button");
  const noClasses = screen.getByTestId("no-classes");

  expect(deleteButton).toHaveClass("extra");
  expect(deleteButton).toHaveClass("btn-danger btn");
  expect(deleteButton).toHaveClass("btn-danger", "btn");
  expect(deleteButton).not.toHaveClass("btn-link");

  expect(deleteButton).toHaveClass("btn-danger extra btn", { exact: true }); // to check if the element has EXACTLY a set of classes
  expect(deleteButton).not.toHaveClass("btn-danger extra", { exact: true }); // if it has more than expected it is going to fail

  expect(noClasses).not.toHaveClass();
});

test("to have focus", async () => {
  render(
    <div>
      <div>
        <input type="text" data-testid="element-to-focus" />
      </div>
    </div>
  );
  const input = getByTestId("element-to-focus");

  input.focus();
  expect(input).toHaveFocus();

  input.blur();
  expect(input).not.toHaveFocus();
});
