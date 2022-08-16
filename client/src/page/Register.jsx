import SignUpForm from "../components/Form/FormElement/SignUp.Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/userAction.js";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../access/logo.png";
import Loading from "./Loading.jsx";
import PrivateRoute from "../helper/PrivateRoute.jsx";

const Register = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const onSubmit = async (value) => {
    delete value.confirmPassword;
    const res = await register(dispatch, value);
    console.log(res);
    if (res) {
      nav("/signin");
    }
  };

  return (
    <PrivateRoute check={!localStorage.token} path={"/blog"}>
      <div className="pt-10  min-h-screen max-w-screen flex justify-center items-center">
        <div className="bg-white py-14 px-5 sm:px-10 w-[98%] sm:w-[60%] lg:w-[40%] 2xl:w-[30%]">
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <h1 className="text-5xl font-semibold text-center font-[700] my-5">
                Sign Up
              </h1>
              <p className={"text-center text-gray-500"}>
                Already have an account?{" "}
                <Link to={"/signin"} className="underline text-cyan-900">
                  Sign In here
                </Link>
                <span
                  className={
                    "flex justify-center border-b my-5 pb-5  items-center"
                  }
                >
                  <img src={Logo} className="w-[60%]" alt="" />
                </span>
              </p>
              <SignUpForm submit={onSubmit} />
            </>
          )}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Register;
