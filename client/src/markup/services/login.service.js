const api_url = process.env.REACT_APP_API_URL;

// A function to send the login request to the server and handle the response
export const login = async (email, password) => {
  try {
    const response = await fetch(`${api_url}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data }; // Return user data on successful login
    } else {
      return { success: false, message: data.message }; // Return error message on failure
    }
  } catch (error) {
    return { success: false, message: error.message }; // Return error message on exception
  }
};

// A function to send the logout request to the server
export const logout = async () => {
  try {
    const response = await fetch(`${api_url}/admin/logout`, {
      method: "POST",
      credentials: "include", // Include cookies for session management
    });
    if (response.ok) {
      return { success: true }; // Return success on successful logout
    } else {
      const data = await response.json();
      return { success: false, message: data.message }; // Return error message on failure
    }
  } catch (error) {
    return { success: false, message: error.message }; // Return error message on exception
  }
};

// A function to check if the user is currently logged in
export const checkAuth = async () => {
  try {
    const response = await fetch(`${api_url}/check-auth`, {
      method: "GET",
      credentials: "include", // Include cookies for session management
    });
    const data = await response.json();
    if (response.ok) {
      return { loggedIn: true, data }; // Return user data if logged in
    } else {
      return { loggedIn: false }; // Return not logged in status
    }
  } catch (error) {
    return { loggedIn: false, message: error.message }; // Return error message on exception
  }
};

// A function to register a new user
export const register = async (email, password) => {
  try {
    const response = await fetch(`${api_url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data }; // Return user data on successful registration
    } else {
      return { success: false, message: data.message }; // Return error message on failure
    }
  } catch (error) {
    return { success: false, message: error.message }; // Return error message on exception
  }
};

// A function to initiate password reset
export const resetPassword = async (email) => {
  try {
    const response = await fetch(`${api_url}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data }; // Return success message on successful request
    } else {
      return { success: false, message: data.message }; // Return error message on failure
    }
  } catch (error) {
    return { success: false, message: error.message }; // Return error message on exception
  }
};

// Export all functions for use in other parts of the application
export default {
  login,
  logout,
  checkAuth,
  register,
  resetPassword,
};
