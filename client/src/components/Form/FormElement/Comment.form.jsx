import { Formik, Form } from "formik";
import * as yup from "yup";
import FormControl from "../FormControl.jsx";
import defaultUser from "../../../access/default.png";
import {
  AddComment,
  DeleteComment,
} from "../../../store/actions/postAction.js";
import { useDispatch, useSelector } from "react-redux";
import CommentItem from "../../Comment/CommentItem.jsx";
import { useEffect, useState } from "react";

const initialState = {
  comment: "",
};

const validateSchema = yup.object({
  comment: yup.string().required("Comment was can't empty"),
});

const CommentForm = ({ data }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.perPost);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    setComment(post?.comment);
  }, []);

  const onSubmit = async (value, action) => {
    const res = await AddComment(dispatch, post._id, value);
    if (res.con) {
      setComment((pre) => [...pre, res.result]);
      action.resetForm();
    }
  };

  const handleDelete = async (i) => {
    const res = await DeleteComment(dispatch, i);
    setComment((pre) => pre.filter((x) => x._id !== i));
  };

  return (
    <div>
      <h1 className="my-5 text-xl font-bold text-center">Users Comment</h1>
      <div className="space-y-2">
        {comment.map((i) => (
          <CommentItem key={i._id} data={i} drop={handleDelete} />
        ))}
      </div>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
        validateOnChange={true}
        validateOnBlur={false}
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
