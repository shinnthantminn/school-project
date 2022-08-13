import FormControl from "../FormControl";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/all";

const initialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  username: yup.string().required("This field was required."),
  email: yup
    .string()
    .email("That should be valid email.")
    .required("This field was required."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match.")
    .required("This field was required."),
});

const SignUpForm = ({ submit }) => {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submit}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <div className="mt-5 relative">
          <FormControl
            control={"input"}
            labelClass={"mt-5 block flex items-center font-[500] "}
            className={"form"}
            type={"text"}
            Element={<FaUser className="mr-2" />}
            name={"username"}
            label={"Username"}
            required={true}
            autoComplete={"off"}
          />
        </div>

        <div className="mt-5 relative">
          <FormControl
            control={"input"}
            labelClass={"mt-5 block flex items-center font-[500]"}
            className={"form"}
            type={"email"}
            name={"email"}
            Element={<FaEnvelope className="mr-2" />}
            label={"Email"}
            required={true}
            autoComplete={"off"}
          />
        </div>

        <div className="mt-5 relative">
          <FormControl
            control={"input"}
            labelClass={"mt-5 block flex items-center font-[500] "}
            className={"form"}
            type={show ? "text" : "password"}
            Element={<FaLock className="mr-2" />}
            name={"password"}
            required={true}
            label={"Password"}
            autoComplete={"off"}
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

        <div className="mt-5 relative">
          <FormControl
            control={"input"}
            labelClass={"mt-5 block flex items-center font-[500] "}
            className={"form"}
            type={confirmShow ? "text" : "password"}
            name={"confirmPassword"}
            Element={<FaLock className="mr-2" />}
            required={true}
            label={"Confirm Password"}
            autoComplete={"off"}
          />
          <button
            type="button"
            onClick={() => {
              setConfirmShow((pre) => !pre);
            }}
            className="absolute top-[45px] right-[10px]"
          >
            {confirmShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        <button
          type="submit"
          className="bg-teal-800 w-full py-2 rounded mb-6 text-lg mt-10 text-center text-xl rounded-full text-white"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
