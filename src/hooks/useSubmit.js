import { useState } from 'react';
import axios from 'axios';
import { useAlertContext } from '../context/alertContext';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const { onOpen } = useAlertContext(); // Use the alert context

  const LAMBDA_URL = process.env.REACT_APP_LAMBDA_INVOKE_URL;

  const submit = async (formData) => {
    setLoading(true);
    try {
      const payload = {
        to: process.env.REACT_APP_TARGET_EMAIL,
        subject: formData.subject || 'New Inquiry',
        body: `Name: ${formData.firstName}\nEmail: ${formData.email}\nType: ${formData.type}\nComment: ${formData.comment}`,
      };

      const res = await axios.post(LAMBDA_URL, payload);
      onOpen('success', 'Email sent successfully'); // Trigger success alert
      setLoading(false);
      return true; // Indicate success
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : 'Something went wrong, please try again later!';
      onOpen('error', errorMessage); // Trigger error alert
      setLoading(false);
      return false; // Indicate failure
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
