/** Send Email method */
export const sendEmail = async (email, subject, message) => {
  try {
    const response = await fetch('http://localhost:3100/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
  }
};