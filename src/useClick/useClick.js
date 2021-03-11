import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  // if (typeof onClick !== 'function') return;
  const ref = useRef();
  useEffect(() => {
    // 이렇게 변수 안에서 copy 하지 않으면 warning 이 뜬다.
    // ref가 unmount 시점에 null 이 된다.
    const element = ref.current;
    if (element) element.current.addEventListener('click', onClick);

    return () => {
      if (element) element.current.removeEventListener('click', onClick);
    };
  }, [onClick]);
  return ref.current;
};
