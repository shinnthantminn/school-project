import { Formik, Form } from "formik";
import FormControl from "../FormControl.jsx";
import * as yup from "yup";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaLock } from "react-icons/all";

const initialState = {
  password: "",
  confirmPassword: "",
};

const validateSchema = yup.object({
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

const ChangePasswordForm = ({ submit }) => {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validateSchema}
      onSubmit={submit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <div className="mt-5 relative">
          <FormControl
            control={"input"}
            labelClass={"mt-5 block flex items-center "}
            Element={<FaLock className={"mr-2 mb-1"} />}
            className={"form"}
            type={show ? "text" : "password"}
            name={"password"}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required={true}
            label={"Password"}
          />
          <button
            type="button"
            onClick={() => {
              setShow((pre) => !pre);
            }}
            className="absolute top-[46px] right-[10px]"
          >
            {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        <div className="mt-5 relative">
          <FormControl
            control={"input"}
            labelClass={"mt-5 block flex items-center "}
            className={"form"}
            Element={<FaLock className={"mr-2 mb-1"} />}
            type={confirmShow ? "text" : "password"}
            name={"confirmPassword"}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required={true}
            label={"Confirm Password"}
          />
          <button
            type="button"
            onClick={() => {
              setConfirmShow((pre) => !pre);
            }}
            className="absolute top-[46px] right-[10px]"
          >
            {confirmShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <button
          type={"submit"}
          className="bg-cyan-800 w-full mt-5 text-white text-center py-2 rounded"
        >
          Change
        </button>
      </Form>
    </Formik>
  );
};

export default ChangePasswordForm;
