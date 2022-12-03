import { useEffect, useState } from 'react';

export function useHttp({ url }: { url: string }) {
  const [data, setData] = useState<unknown>([]);

  //https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
  useEffect(() => {
    if (url.length > 6) {
      console.log(url);

      const controller = new AbortController();
      const signal = controller.signal;
      fetch(url, { signal })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('successfully aborted');
          } else {
            // handle error
            console.log('error', err);
          }
        });

      return () => {
        // cancel the request before component unmounts
        controller.abort();
      };
    }
  }, [url]);

  return data;
}
