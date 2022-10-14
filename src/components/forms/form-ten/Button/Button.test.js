import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

it("checkButton render", () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
});

describe("click button", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle("dummyButton");
    expect(btn).toHaveTextContent("Press Here");
    fireEvent.click(btn);
    expect(btn).toHaveTextContent("You Clicked");
  });
});
