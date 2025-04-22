import { createBrowserRouter } from "react-router-dom";  // Add this import
import App from './App';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,  // Better than path: '/' for the home route
                element: <Home />
            }, 
            {
                path: 'about',  // Relative path (no leading slash)
                element: <About />
            },  
            {
                path: 'login',  // Relative path (no leading slash)
                element: <Login />
            }, 
        ]
    }
]);

export default router;  // Export the configured router