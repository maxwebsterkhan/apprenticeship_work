import React from 'react';

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
setInterval(tick, 1000);

export default tick
