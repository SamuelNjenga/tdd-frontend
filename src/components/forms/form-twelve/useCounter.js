import { useState, useCallback } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((x) => x + 1), []);
  const reset = () => {
    setCount(0);
  };

  return { count, increment, reset };
}
