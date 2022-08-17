import LoginForm from "../components/Form/FormElement/Login.Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/actions/userAction.js";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../access/logo.png";
import Loading from "./Loading.jsx";
import PrivateRoute from "../helper/PrivateRoute.jsx";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const nav = useNavigate();
  const onSubmit = async (value) => {
    const res = await LoginAction(dispatch, value);
    console.log(res);
    if (res) {
      nav("/blog");
    }
  };

  return (
    <PrivateRoute check={!localStorage.token} path={"/blog"}>
      <motion.div
        variants={animation}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className="pt-10 min-h-screen w-screen flex justify-center items-center"
      >
        <div className="bg-white py-14 px-5 sm:px-10 w-[98%] sm:w-[50%] lg:w-[40%] 2xl:w-[30%]">
          {state.loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <h1 className="text-5xl font-semibold text-center font-[700]">
                Sign In
              </h1>

              <p className="text-center my-5 text-gray-500">
                Doesn't you have an account yet?{" "}
                <span>
                  <Link to={"/signup"} className="underline text-cyan-800">
                    Sign Up here
                  </Link>
                </span>
              </p>
              <div className="flex justify-center items-center border-b pb-5">
                <img src={Logo} className={"w-[60%]"} alt="" />
              </div>
              <LoginForm submit={onSubmit} />
            </>
          )}
        </div>
      </motion.div>
    </PrivateRoute>
  );
};

export default Login;
