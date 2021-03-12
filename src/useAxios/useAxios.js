import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  // if (!opts.url) return;

  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(new Date());
  };

  useEffect(() => {
    axiosInstance(opts) //
      .then((data) => {
        setState((state) => ({
          ...state,
          loading: false,
          data,
        }));
      })
      .catch((error) => {
        setState((state) => ({ ...state, loading: false, error }));
      });
  }, [axiosInstance, opts, trigger]);
  return { ...state, refetch };
};
