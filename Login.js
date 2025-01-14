/** Add the login functionality */
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

/** Add Signup Exceptions */
export const signup = async (email, pwd) => {
  try {
    const response = await fetch('http://localhost:3100/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pwd }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

/** Add the Get User Functionality */
export const getUser = async (token, userId) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting user:', error);
  }
};