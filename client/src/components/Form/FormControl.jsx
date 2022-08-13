import { Input, Date, Radio, Select, CheckBox, TextArea } from "./Tool";

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "date":
      return <Date {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
