import { BsFillCalendarEventFill } from "react-icons/all";
import CreatePostForm from "../components/Form/FormElement/CreatePost.form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { PostAdding } from "../store/actions/postAction.js";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "../helper/PrivateRoute.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    y: 1300,
  },
  visible: {
    y: 0,
  },
  exit: {
    y: 1300,
  },
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const post = useSelector((state) => state.post);
  const onSubmit = async (value) => {
    const res = await PostAdding(dispatch, value);
    if (res) {
      nav("/blog");
    }
  };

  return (
    <PrivateRoute check={localStorage.token} path={"/signin"}>
      <motion.div
        variants={animation}
        initial={"hidden"}
        exit={"exit"}
        animate={"visible"}
      >
        <div className="w-[98%] lg:w-[70%] mx-auto pt-24">
          <div className="w-full sm:w-[70%] mx-auto">
            <div className="px-7 py-7">
              <div className={"flex justify-between"}>
                <h1 className="text-lg sm:text-2xl font-semibold">
                  Create a New Post
                </h1>
                <div className="font-semibold flex items-center space-x-2 text-gray-500">
                  <BsFillCalendarEventFill />
                  <p>{new Date(Date.now()).toDateString()}</p>
                </div>
              </div>
              <CreatePostForm submit={onSubmit} />
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </PrivateRoute>
  );
};

export default CreatePost;
