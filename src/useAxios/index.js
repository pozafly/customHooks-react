import React from 'react';
import { useAxios } from './useAxios';

const App = () => {
  const url = `https://yts.mx/api/v2/list_movies.json`;

  const { loading, data, error, refetch } = useAxios(url);
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${data}`);

  return (
    <div>
      <h2>{data && data.status}</h2>
      <button onClick={refetch}>Refetch</button>
      <h3>{loading && 'Loading'}</h3>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default App;
