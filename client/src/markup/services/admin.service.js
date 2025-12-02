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

    // Check the `status` field in the `data` object
    if (response.ok && data.status === "success") {
      return { success: true, data: data.data || [] }; // Extract the `data` array
    }

    return { success: false, message: data.message || "Failed to fetch admins" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

//  A function to get a single admin by ID
export const getAdminById = async (admin_id) => {
  try {
    const response = await fetch(`${api_url}/admin/${admin_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },  
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    }
    return { success: false, message: data.message || "Failed to fetch admin" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// A function to update an admin
export const updateAdmin = async (admin_id, formData) => {
  try {
    const response = await fetch(`${api_url}/admin/edit/${admin_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    }
    return { success: false, message: data.message || "Update failed" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// A function to delete an admin
export const deleteAdmin = async (admin_id) => {
  try {
    const response = await fetch(`${api_url}/admin/delete/${admin_id}`, { 
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } 
    return { success: false, message: data.message || "Deletion failed" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


// Export all the functions
const adminService = {
  register,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
};

export default adminService;
