import React from 'react';
import { useFullscreen } from './useFullscreen';

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? 'we are full' : 'we are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div>
      <div ref={element}>
        <img src='https://item.kakaocdn.net/do/d0abc6fe74e616536cf07626699bbc707154249a3890514a43687a85e6b6cc82' />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
