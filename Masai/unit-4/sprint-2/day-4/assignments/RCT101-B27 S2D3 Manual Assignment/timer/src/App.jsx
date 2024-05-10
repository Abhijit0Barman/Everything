import React, { useState } from 'react';
import Timer from './components/Timer';

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  const toggleTimer = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer);
  };

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={toggleTimer}>
        {showTimer ? 'HIDE COUNTER' : 'SHOW COUNTER'}
      </button>
    </div>
  );
};

export default App;
