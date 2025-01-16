/** Methods related to User */
export const login = async (email, pwd) => {
  try {
    const response = await fetch('http://localhost:3100/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pwd }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};