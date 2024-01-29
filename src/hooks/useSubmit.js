import { useState } from 'react';
import axios from 'axios';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const res = await axios.post(url, data);
      setResponse({
        type: 'success',
        message: res.data,
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: error.response
          ? error.response.data
          : 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
