import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error('Error api is no defined');
      const data = await res.json();
      setDatas(data);
    } catch (error) {
      console.log(
        `%c${error.message}`,
        'background:red; color:#fff; padding:0px 14px; border-radius: 4px;'
      );
      setError(error.message);
      setDatas([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log(
      '%cMounted',
      'background:green; color:#fff; padding:0px 14px; border-radius: 4px;'
    );
    fetchData();
  }, []);

  return {
    datas,
    loading,
    error
  };
};
