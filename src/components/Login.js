import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  // Get the login function from App.js via context
  const login = useOutletContext();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    // Add validation logic here if needed
    if (formData.username && formData.password) {
      login(); // Trigger the login function from App.js
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label> {/* Fixed: 'for' -> 'htmlFor' */}
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required // Added HTML5 validation
        />
      </div>
      <label htmlFor="password">Password</label> {/* Fixed: 'for' -> 'htmlFor' */}
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required // Added HTML5 validation
          minLength={6} // Example validation
        />      
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
