import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Loggedinuser() {
  const user = useSelector((users) => users.login.loggedIn);
  return user ? <Outlet /> : <Navigate to={"/login"} />;
}
