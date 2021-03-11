import React from 'react';
import { useBeforeLeave } from './useBeforeLeave';

const App = () => {
  const begForLife = () => console.log('Pls dont leave');
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default App;
