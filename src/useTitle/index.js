import React from 'react';
import { useTitle } from './useTitle';

const TitleExam = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 1000);
  return <h2>Hi!</h2>;
};

export default TitleExam;
