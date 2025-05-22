import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        padding: '10px',
        backgroundColor: 'skyblue',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer'
      }}
    >
      Count: {count}
    </button>
  );
}
