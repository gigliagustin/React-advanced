import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
    setDataFetch({
      loading: false,
      error: null,
      data,
    });
  };
  useEffect(() => {
    getData();
    return () => {
    };
  }, [url]);
  return dataFetch;
};

export default useFetch;
