import { ErrorMessage, Field } from "formik";

const Input = ({
  label,
  name,
  type,
  ErrorClass = "text-red-500",
  labelClass = "",
  Element,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {Element}
        {label}
      </label>
      <Field name={name} id={name} {...rest} type={type} />
      <ErrorMessage name={name} component={"p"} className={ErrorClass} />
    </>
  );
};

export default Input;
