import { useState } from 'react';
import axios from 'axios';

import { useAlertContext } from '../context/alertContext';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const { onOpen } = useAlertContext();

  const LAMBDA_URL = process.env.REACT_APP_LAMBDA_INVOKE_URL;

  const submit = async (formData, resetForm) => {
    setLoading(true);
    try {
      const payload = {
        to: process.env.REACT_APP_TARGET_EMAIL,
        subject: 'New Inquiry from ' + formData.firstName,
        body: `Name: ${formData.firstName}\nEmail: ${formData.email}\nType: ${formData.type}\nComment: ${formData.comment}`,
      };
      console.log('Sending request to Lambda:', LAMBDA_URL, payload);
      const res = await axios.post(LAMBDA_URL, payload);
      console.log('Response from Lambda:', res.data);

      onOpen('success', 'Email sent successfully');
      resetForm();
    } catch (error) {
      console.error('Error in useSubmit:', error);
      let errorMessage = 'Error occurred while sending email.';
      if (error.response && error.response.data) {
        errorMessage =
          error.response.data.message || JSON.stringify(error.response.data);
      }
      onOpen('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
