import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    return localStorage.getItem("auth_token") ? (children) : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;