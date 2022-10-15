import { renderHook } from "@testing-library/react";

import { useCounterVersionTwo } from "./useCounterVersionTwo";

test("should increment counter after delay", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useCounterVersionTwo()
  );

  result.current.incrementAsync();

  await waitForNextUpdate();

  expect(result.current.count).toBe(1);
});