import { ErrorMessage, Field } from "formik";

const Select = ({
  name,
  label,
  labelClass = "",
  ErrorClass = "text-red-500",
  option,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <Field as={"select"} id={name} name={name} {...rest}>
        {option.map((i) => (
          <option key={i.key} value={i.key}>
            {i.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={"p"} className={ErrorClass} />
    </>
  );
};

export default Select;
