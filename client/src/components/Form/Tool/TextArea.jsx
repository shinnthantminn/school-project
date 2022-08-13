import { ErrorMessage, Field } from "formik";

const TextArea = ({
  name,
  label,
  labelClass = "",
  ErrorClass = "text-red-500",
  ...rest
}) => {
  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <Field as={"textarea"} {...rest} name={name} />
      <ErrorMessage name={name} component={"p"} className={ErrorClass} />
    </>
  );
};

export default TextArea;
