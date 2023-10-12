import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ path }) => {
	const token = localStorage.getItem("user");

	return token ? <Outlet /> : <Navigate to={path} />;
};

export default ProtectedRoute;
