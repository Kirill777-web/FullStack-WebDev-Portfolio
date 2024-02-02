import { useState } from 'react';
import axios from 'axios';
import { useAlertContext } from '../context/alertContext';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const { onOpen } = useAlertContext(); // Use the alert context

  const LAMBDA_URL = process.env.REACT_APP_LAMBDA_INVOKE_URL;

  const submit = async (formData, resetForm) => {
    setLoading(true);
    try {
      // Prepare the payload with email data
      const payload = {
        to: process.env.REACT_APP_TARGET_EMAIL,
        subject: 'New Inquiry from ' + formData.firstName,
        body: `Name: ${formData.firstName}\nEmail: ${formData.email}\nType: ${formData.type}\nComment: ${formData.comment}`,
      };

      const res = await axios.post(LAMBDA_URL, payload);
      setResponse({
        type: 'success',
        message: 'Email sent successfully',
      });
      resetForm(); // Reset form fields after successful submission
    } catch (error) {
      let errorMessage = 'Error occurred while sending email.';
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

  return { isLoading, submit };
};

export default useSubmit;
