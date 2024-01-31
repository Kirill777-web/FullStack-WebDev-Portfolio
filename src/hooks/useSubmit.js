import { useState } from 'react';
import axios from 'axios';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Replace 'YOUR_LAMBDA_INVOKE_URL' with your actual Lambda function's URL
  const LAMBDA_URL =
    'https://fupbzdqy74.execute-api.us-east-1.amazonaws.com/prod/email';

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(LAMBDA_URL, data);
      setResponse({
        type: 'success',
        message: res.data,
      });
    } catch (error) {
      // Ensure the error message is a string
      const errorMessage =
        error.response && typeof error.response.data === 'object'
          ? JSON.stringify(error.response.data)
          : error.response
          ? error.response.data
          : 'Something went wrong, please try again later!';
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
