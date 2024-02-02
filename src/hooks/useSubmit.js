import { useState } from 'react';
import axios from 'axios';
//import dotenv from 'dotenv';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const LAMBDA_URL = process.env.REACT_APP_LAMBDA_INVOKE_URL;

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(LAMBDA_URL, data);
      setResponse({
        type: 'success',
        message: res.data.message,
      });
    } catch (error) {
      let errorMessage = 'Something went wrong, please try again later!';
      if (error.response && error.response.data) {
        errorMessage =
          error.response.data.message || JSON.stringify(error.response.data);
      }
      setResponse({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
