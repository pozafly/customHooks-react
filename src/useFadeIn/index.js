import React from 'react';
import { useFadeIn } from './useFadeIn';

const App = () => {
  const fadeInH1 = useFadeIn(1, 3);
  const fadeInP = useFadeIn(5, 5);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalal</p>
    </div>
  );
};

export default App;
