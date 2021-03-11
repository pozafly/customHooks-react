import { useEffect, useState } from 'react';

export const useNetwork = (onChange) => {
  const [status, setStatue] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => {
      if (typeof onChange === 'function') {
        onChange(navigator.onLine);
      }
      setStatue(navigator.onLine);
    };

    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, [onChange]);
  return status;
};
