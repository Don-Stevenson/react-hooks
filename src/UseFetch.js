import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setstate] = useState({ data: null, loading: true });
  
  useEffect(() => {
    setstate(state => ({ state: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => setstate({ data: y, loading: false }));
  }, [url, setstate]);
  return state;
}; 
