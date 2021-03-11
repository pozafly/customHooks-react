import React from 'react';
import { useNetwork } from './useNetwork';

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(onLine ? 'we just went online' : 'we are offline');
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? 'onLine' : 'offLine'}</h1>
    </div>
  );
};

export default App;
