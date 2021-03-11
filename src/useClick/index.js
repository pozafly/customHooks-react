import React from 'react';
import { useClick } from './useClick';

const App = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
