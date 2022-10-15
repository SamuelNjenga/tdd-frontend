import { renderHook, act } from "@testing-library/react";

import { useCounterVersionThree } from "./useCounterVersionThree";

it("should throw when over 9000", () => {
  const { result } = renderHook(() => useCounterVersionThree(9000));

  act(() => {
    result.current.increment();
  });

  expect(result.error).toEqual(Error("It's over 9000!"));
});
