import { ErrorMessage, Field } from "formik";
import { Fragment } from "react";

const CheckBox = ({
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
        {name}
      </label>
      <Field name={name} {...rest}>
        {({ field }) =>
          option.map((i, inx) => (
            <Fragment key={inx}>
              <label htmlFor={i.value}>{i.key}</label>
              <input
                {...field}
                checked={field.value.includes(i.value)}
                type={"checkbox"}
                id={i.value}
                value={i.value}
              />
            </Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} component="p" className={ErrorClass} />
    </>
  );
};

export default CheckBox;
