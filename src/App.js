import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Login function to be passed to child components
  const login = () => {
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Handle navigation based on auth status
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to home when logged in
    } else {
      navigate("/login"); // Redirect to login when logged out
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {/* Only show NavBar when logged in */}
      {isLoggedIn && <NavBar logout={logout} />}
      {/* Pass login function to child routes via context */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
