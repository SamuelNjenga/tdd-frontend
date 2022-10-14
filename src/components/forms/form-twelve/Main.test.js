import { renderHook, act } from "@testing-library/react";

import useCounter from "./useCounter";
import useCounterVersionTwo from "./useCounterVersionTwo";

test("should use counter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe("function");
});

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("should increment counter from custom initial value", () => {
  const { result } = renderHook(() => useCounterVersionTwo(9000));

  act(() => {
    result.current.incrementor();
  });

  expect(result.current.counter).toBe(9001);
});

test("should reset counter to updated initial value", () => {
  let initialValue = 0;
  const { result, rerender } = renderHook(() =>
    useCounterVersionTwo(initialValue)
  );

  initialValue = 10;
  rerender();

  act(() => {
    result.current.resetter();
  });

  expect(result.current.counter).toBe(10);
});

test("should reset counter to updated initial value with a series of prop(s)", () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounterVersionTwo(initialValue),
    {
      initialProps: { initialValue: 0 },
    }
  );

  rerender({ initialValue: 10 });

  act(() => {
    result.current.resetter();
  });

  expect(result.current.counter).toBe(10);
});
