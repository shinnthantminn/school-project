import FormControl from "../FormControl.jsx";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { FaEnvelope } from "react-icons/all";

const initialValue = {
  email: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("That is not valid email")
    .required("this field was required"),
});

const ForgotPasswordEmailForm = ({ submit }) => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submit}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <FormControl
          control={"input"}
          name={"email"}
          className={"form mt-1"}
          labelClass={"mt-2 block flex items-center"}
          label={"Email"}
          Element={<FaEnvelope className="mr-1 " />}
          placeholder={"Your email address"}
        />
        <button
          type={"submit"}
          className="px-2 py-2 text-center w-full bg-cyan-800 rounded text-white mt-5"
        >
          Reset Password
        </button>

        <Link
          to={"/signin"}
          className="flex justify-center items-center space-x-2 mt-3"
          type="button"
        >
          <BsArrowLeft />
          <p>Back to login</p>
        </Link>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordEmailForm;
