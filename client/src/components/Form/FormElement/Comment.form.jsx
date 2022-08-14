import { Formik, Form } from "formik";
import * as yup from "yup";
import FormControl from "../FormControl.jsx";
import defaultUser from "../../../access/default.png";

const initialState = {
  comment: "",
};

const validationSchema = yup.object({
  comment: yup.string().required("That field was required"),
});

const CommentForm = ({ data }) => {
  const onSubmit = (value) => {
    console.log(value);
  };

  console.log(data);

  return (
    <div>
      <h1 className="my-5 text-xl font-bold text-center">Users Comment</h1>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormControl
            control={"textarea"}
            name={"comment"}
            className={"form !rounded-xl h-[120px]"}
            placeholder={"Your comment"}
          />
          <div className="flex justify-between mt-2">
            <div className="flex items-center space-x-2">
              <div className={"w-[40px] h-[40px]"}>
                <img
                  className={"w-full h-full rounded-full object-cover"}
                  src={
                    data.data.avatar
                      ? `http://localhost:4000/upload/User/${data.data.avatar}`
                      : defaultUser
                  }
                  alt=""
                />
              </div>
              <p>{data.data.username}</p>
            </div>
            <div>
              <button className="px-2 py-2 bg-cyan-800 text-white rounded-full">
                Comment
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
