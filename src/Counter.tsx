import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        background: "auto",
        zIndex: 999,
      }}
      className="text-lg bg-red-500 fixed top-10 right-10 p-2 rounded-md"
    >
      Count: {count}
    </button>
  );
}
