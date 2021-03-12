import React from 'react';
import { useNotification } from './useNotification';

const App = () => {
  const trigerNofitif = useNotification('Can I steal your kimchi?', {
    body: 'I love kimchi dont you',
  });
  return (
    <div>
      <button onClick={trigerNofitif}>Hello</button>
    </div>
  );
};

export default App;
