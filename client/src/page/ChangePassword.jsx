import ChangePasswordForm from "../components/Form/FormElement/ChangePassword.Form.jsx";
import {
  emailAuthorization,
  passwordChange,
} from "../store/actions/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

const ChangePassword = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    emailAuthorization(dispatch).then((res) => {
      if (!res) {
        nav("/signin");
      }
    });
  }, []);

  const onSubmit = async ({ password }) => {
    const res = await passwordChange(dispatch, {
      email: user.data.email,
      password,
    });
    if (res) {
      localStorage.removeItem("token");
      nav("/signin");
    }
  };

  return (
    <motion.div
      variants={animation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className=" min-h-screen w-screen flex justify-center items-center"
    >
      <motion.div className="bg-white py-14 px-5 sm:px-10 w-[98%] sm:w-[50%] lg:w-[40%] 2xl:w-[30%]">
        <h1 className="text-2xl text-center">Change your password</h1>
        <ChangePasswordForm submit={onSubmit} />
      </motion.div>
    </motion.div>
  );
};

export default ChangePassword;
