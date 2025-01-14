/** Add the login functionality */
export const login = async (email, password, securty_question) => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, securty_question}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

/** Add Signup Exceptions */
export const signup = async (email, password) => {
  try {
    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
