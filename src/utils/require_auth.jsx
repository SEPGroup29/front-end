import { Navigate, useLocation } from "react-router-dom";
import Token from '../services/token'
import jwtDecode from "jwt-decode";

export default function RequireAuth ({ children, allowedRoles }) {
    // const {auth} = useAuth({
    //   userRole:''
    // });
    const location = useLocation();
    // if (!auth.roles) {
    //   return <Navigate to="/login"  state={{path:location.pathname}} />;
    // }
    // return children
    // console.log("hello",auth);
    // console.log("allowedRoles",allowedRoles);
    try {
        var user = jwtDecode(Token.getAccessToken())
        console.log("USER",user);
    }
    catch (err) {
        user = null
    }



    return (
        allowedRoles?.find(role => user?.role?.includes(role))
            ? children
            : user ? <Navigate to="/unauthorized" state={{ from: location.pathname }} replace />
                : <Navigate to="/" state={{ from: location.pathname }} replace />
    );
};