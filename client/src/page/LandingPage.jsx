import First from "../components/LandingPage/First.jsx";
import TopDestination from "../components/LandingPage/TopDestination.jsx";
import LatestPost from "../components/LandingPage/LatestPost.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLatestPost } from "../store/actions/postAction.js";
import { motion } from "framer-motion";

const LandingPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    GetLatestPost(dispatch);
  }, []);

  const animation = {
    hidden: {
      x: 1900,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: 1900,
    },
  };

  return (
    <motion.div
      variants={animation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="max-h-[100vh] bg-gray-300"
    >
      <First />
      <TopDestination />
      <LatestPost data={post} />
    </motion.div>
  );
};

export default LandingPage;
