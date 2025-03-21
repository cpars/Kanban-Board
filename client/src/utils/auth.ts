import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    // Return the decoded token
    return jwtDecode<JwtPayload>(this.getToken());
  }

  loggedIn() {
    // Check if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    // Decode the token
    try {
      // Decode the token
      const decoded = jwtDecode<JwtPayload>(token);
      // Check if the token is expired
      if (decoded.exp && decoded.exp < Date.now() / 1000) {
        return true;
      }
    } catch (err) {
      return true;
    }
  }

  getToken(): string {
    // Get the token from localStorage
    const token = localStorage.getItem("token") || "";
    return token;
  }

  login(idToken: string) {
    // Set the token to localStorage
    localStorage.setItem("token", idToken);
    // Redirect to the home page
    window.location.assign("/");
  }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
    window.location.assign("/");
  }
}

export default new AuthService();
