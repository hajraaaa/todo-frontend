import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
    return !localStorage.getItem("auth_token") ? children : <Navigate to="/" replace />;
}

export default PublicRoutes;