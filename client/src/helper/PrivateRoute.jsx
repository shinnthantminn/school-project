import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, check, path }) => {
  if (check) {
    return <>{children}</>;
  } else {
    return <Navigate to={path} />;
  }
};

export default PrivateRoute;
