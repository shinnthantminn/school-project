import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from "formik";

const Date = ({
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
      <Field name={name}>
        {({ field, form: { setFieldValue }, form }) => {
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={field.value}
              onChange={(e) => setFieldValue(name, e)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={"p"} className={ErrorClass} />
    </>
  );
};

export default Date;
