import { BsFillCalendarEventFill } from "react-icons/all.js";
import EditPostForm from "../components/Form/FormElement/EditPost.form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../store/actions/postAction.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";

const animation = {
  hidden: {
    y: 1500,
  },
  visible: {
    y: 0,
  },
  exit: {
    y: 1500,
  },
};

const EditPost = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const nav = useNavigate();
  const onSubmit = async (value) => {
    const res = await editPost(dispatch, value, post.perPost._id);
    if (res) {
      nav("/blog");
    }
  };

  return (
    <motion.div
      variants={animation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <div className="w-[98%] lg:w-[70%] mx-auto pt-24">
        <div className="w-full sm:w-[70%] mx-auto">
          <div className="px-7 py-7">
            <div className={"flex justify-between"}>
              <h1 className="text-2xl font-semibold">Edit your Post</h1>
              <div className="font-semibold flex items-center  space-x-2 text-gray-500">
                <BsFillCalendarEventFill />
                <p>{new Date(Date.now()).toDateString()}</p>
              </div>
            </div>
            <EditPostForm submit={onSubmit} post={post} />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default EditPost;
