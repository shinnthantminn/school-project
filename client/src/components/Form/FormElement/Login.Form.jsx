import { Formik, Form } from "formik";
import FormControl from "../FormControl.jsx";
import { Link, useLocation } from "react-router-dom";
import * as yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/all";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("This field was required")
    .email("That is not valid email"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
});

const LoginForm = ({ submit }) => {
  const [show, setShow] = useState(false);
  const initialValue = {
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={submit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        enableReinitialize={true}
      >
        <Form>
          <FormControl
            control={"input"}
            name={"email"}
            type={"email"}
            label={`Email`}
            Element={<FaEnvelope className={"mr-2 mb-1"} />}
            autoComplete={"off"}
            labelClass={"mt-5 font-[500] block flex items-center "}
            className={"form"}
          />

          <div className="mt-5 relative">
            <FormControl
              control={"input"}
              name={"password"}
              type={show ? "text" : "password"}
              label={"Password"}
              Element={<FaLock className={"mr-2 mb-1"} />}
              autoComplete={"off"}
              labelClass={"mt-5 block flex items-center "}
              className={"form"}
            />
            <button
              type="button"
              onClick={() => {
                setShow((pre) => !pre);
              }}
              className="absolute top-[45px] right-[10px]"
            >
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <div className={"flex justify-between"}>
            <div className={"flex items-center space-x-1"}>
              <input id={"rememberMe"} type="checkbox" />
              <label htmlFor="rememberMe" className={"font-[500]"}>
                Remember me
              </label>
            </div>
            <Link
              to={"/forgot&password"}
              className="font-[500] my-3 block w-fit"
            >
              Forgot password
            </Link>
          </div>

          <button
            type="login"
            className="text-xl font-[500] rounded-full w-full py-3 mt-5 bg-cyan-900 text-white"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
