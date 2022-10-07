import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

test("renders a message", () => {
  const { asFragment, getByText } = render(<Main />);
  expect(getByText("Javascript Tester")).toBeInTheDocument();
  // expect(asFragment()).toMatchInlineSnapshot(`
  //   <h1>Javascript Tester</h1>
  // `);
});

test("renders a message", () => {
  const { getByTestId, rerender } = render(<Main count={2} />);
  expect(getByTestId("custom-element")).toHaveTextContent(2);

  // re-render the same component with different props
  rerender(<Main count={4} />);
  expect(getByTestId("custom-element")).toHaveTextContent(4);
});
