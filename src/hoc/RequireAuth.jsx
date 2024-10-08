import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const RequireAuth = () => {
    const { token } = useAuth();
    const location = useLocation();

    console.log("Token in RequireAuth:", token)

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/" state={{ from: location }} />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};
