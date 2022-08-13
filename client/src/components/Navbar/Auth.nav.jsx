import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../../store/actions/userAction.js";

const AuthNav = ({ drop }) => {
  const { isAuthorization } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = async () => {
    const res = await LogoutAction(dispatch);
    if (res) {
      nav("/");
    }
  };

  return (
    <>
      <ul className={drop ? "dropdown sm:scale-y-1" : "dropdown sm:scale-y-0"}>
        {isAuthorization ? (
          <>
            <li className="sm:duration-300 sm:hover:bg-gray-300">
              <Link to={"/profile&edit"} className={"sm:px-3 sm:py-3 block"}>
                Edit Profile
              </Link>
            </li>
            <li className=" sm:duration-300 hover:bg-gray-300 sm:border-b">
              <Link to={"/password&change"} className={"sm:px-3 sm:py-3 block"}>
                Change Password
              </Link>
            </li>
            <li className=" sm:duration-300 hover:bg-gray-300">
              <button
                className={"sm:px-3 sm:py-3 w-full text-left"}
                onClick={handleLogout}
              >
                LogOut
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="sm:duration-300 sm:hover:bg-gray-300">
              <Link className={"sm:px-3 sm:py-3 block"} to="/signin">
                Sign In
              </Link>
            </li>
            <li className=" sm:duration-300 hover:bg-gray-300">
              <Link className={"sm:px-3 sm:py-3 block"} to="/signup">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default AuthNav;
