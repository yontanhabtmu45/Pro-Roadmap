const api_url = "http://localhost:1010/api";

// A function to send POST request to register a new admin
export const register = async (formData) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${api_url}/admin/register`, requestOptions);
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    }
    return { success: false, message: data.message || "Registration failed" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Fetch all admins
export const getAllAdmins = async () => {
  try {
    const response = await fetch(`${api_url}/admins`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) return { success: true, data };
    return { success: false, message: data.message || "Failed to fetch admins" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Export all the functions
const adminService = {
  register,
  getAllAdmins,
};

export default adminService;
