import { getFirestore } from "firebase/firestore";
const isValidEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const isValidName = (name) => {
    // Basic validation to ensure name is not empty
    return name.trim().length > 0;
  };
  
  const isValidRole = (role) => {
    // Assuming predefined roles
    const validRoles = ['user', 'admin', 'super-admin'];
    return validRoles.includes(role);
  };
  export const validateUserData = (userData) => {
    const { name, email, role } = userData;
  
    if (!isValidName(name) || !isValidEmail(email) || !isValidRole(role)) {
      throw new Error("Invalid user data");
    }
  
    // Additional logic if needed
    return true;
  };
    