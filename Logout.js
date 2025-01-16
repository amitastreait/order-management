/** Logout method */
export const logout = async () => {
  try {
    const response = await fetch('http://localhost:3100/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging out:', error);
  }
};