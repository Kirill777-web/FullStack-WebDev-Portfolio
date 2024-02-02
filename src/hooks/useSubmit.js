import { useState } from 'react';
import axios from 'axios';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Replace 'YOUR_LAMBDA_INVOKE_URL' with your actual Lambda function's URL
  const LAMBDA_URL =
    'https://wr1yqmnzo4.execute-api.us-east-1.amazonaws.com/prod';

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(LAMBDA_URL, data);
      setResponse({
        type: 'success',
        message: 'Email sent successfully',
      });
    } catch (error) {
      let errorMessage = 'Something went wrong, please try again later!';
      if (error.response) {
        errorMessage = error.response.data
          ? error.response.data.message || JSON.stringify(error.response.data)
          : errorMessage;
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
