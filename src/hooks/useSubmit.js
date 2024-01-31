import { useState } from 'react';
import axios from 'axios';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Replace 'YOUR_LAMBDA_INVOKE_URL' with your actual Lambda function's URL
  const LAMBDA_URL =
    'https://9ymbixvnd6.execute-api.us-east-1.amazonaws.com/prod';

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(LAMBDA_URL, data);
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
