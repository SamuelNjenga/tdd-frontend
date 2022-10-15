import { renderHook, act } from "@testing-library/react";

import { CounterStepProvider, useCounter } from "./useCounter";
import { useCounterVersionTwo } from "./useCounterVersionTwo";

test("should use custom step when incrementing", () => {
  const wrapper = ({ children }) => (
    <CounterStepProvider step={2}>{children}</CounterStepProvider>
  );

  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);
});

test("should use custom step when incrementing", () => {
  const wrapper = ({ children, step }) => (
    <CounterStepProvider step={step}>{children}</CounterStepProvider>
  );
  const { result, rerender } = renderHook(() => useCounter(), {
    wrapper,
    initialProps: {
      step: 2,
    },
  });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);

  /**
   * Change the step value
   */
  rerender({ step: 8 });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(10);
});

test("should increment counter after delay", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useCounterVersionTwo()
  );

  result.current.incrementAsync();

  await waitForNextUpdate();

  expect(result.current.count).toBe(1);
});
