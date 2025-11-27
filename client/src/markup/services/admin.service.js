const api_url = process.env.REACT_APP_API_URL;

// A function to sent post request to register a new admin
export const register = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  };
  const response = await fetch(`${api_url}/admin/register`, requestOptions);
  return response;
};
//  Export all the functions
const adminService = {
  register,
};

export default adminService;
