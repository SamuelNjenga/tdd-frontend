import { useState, useCallback } from "react";

export default function useCounterVersionTwo(initialValue = 0) {
  const [counter, setCount] = useState(initialValue);

  const incrementor = useCallback(() => setCount((x) => x + 1), []);
const resetter = useCallback(() => setCount(initialValue), [initialValue]);

  return { counter, incrementor,resetter };
}
