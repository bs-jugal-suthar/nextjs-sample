import React from 'react';

const ServerCounter = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  const count = 0;

  return (
    <div>
      <p>Count: {count}</p>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
};

export default ServerCounter;
