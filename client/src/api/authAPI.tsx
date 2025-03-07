// Import the UserLogin interface, which defines the expected structure of the user credentials
import { UserLogin } from "../interfaces/UserLogin";

// Function to handle user login
const login = async (userInfo: UserLogin) => {
  try {
    // Send a POST request to the authentication API endpoint
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });

    // Check if the response status is not OK
    if (!response.ok) {
      const errorMessage = await response.json();
      // Throw an error with a custom message or the server-provided error
      throw new Error(errorMessage.error || "Failed to login");
    }

    // Convert the successful response data from JSON format
    const data = await response.json();

    // Return the received user authentication data
    return data;
  } catch (error) {
    // Log any errors that occur during the login process
    console.error("Login error: ", error);
    throw error;
  }
};

// Export the login function to use it in other parts of the application
export { login };
