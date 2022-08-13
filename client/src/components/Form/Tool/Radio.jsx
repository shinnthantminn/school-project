import { ErrorMessage, Field } from "formik";
import { Fragment } from "react";

const Radio = ({
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
      <Field name={name} {...rest}>
        {({ field }) =>
          option.map((i, inx) => (
            <Fragment key={inx}>
              <input
                type="radio"
                {...field}
                value={i.value}
                id={i.value}
                checked={field.value === i.value}
              />
              <label htmlFor={name}>{i.key}</label>
            </Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={"p"} className={ErrorClass} />
    </>
  );
};

export default Radio;
