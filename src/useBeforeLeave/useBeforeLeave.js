import { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
  // if (typeof onBefore !== 'function') return;
  useEffect(() => {
    const handle = () => {
      onBefore();
    };
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [onBefore]);
};
