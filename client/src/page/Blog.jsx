import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetAllPost, PaginatePost } from "../store/actions/postAction.js";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading.jsx";
import BlogItem from "../components/Blog/BlogItem.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Blog = ({ user }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [ok, setOk] = useState(true);
  const [remain, setRemain] = useState(0);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await GetAllPost(dispatch, number);
      setRemain(res);
    })();
  }, []);

  useEffect(() => {
    if (number === 1) {
      setNumber(2);
    }

    console.log(remain);

    if (post.post?.length === remain) {
      setOk(false);
    }
  }, [post.post, remain]);

  const fetchMore = () => {
    if (post.post.length < remain) {
      PaginatePost(dispatch, number);
      setNumber((pre) => pre + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {post.loading ? (
        <Loading />
      ) : (
        <motion.div
          variants={animation}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className="w-[95%] lg:w-[70%] mx-auto pt-24"
        >
          <div className="w-full sm:w-[80%] !h-fit 2xl:w-[70%] mx-auto">
            {user.isAuthorization && (
              <div className="px-2 sm:px-7 mb-10 flex justify-between items-center py-7 border rounded-xl">
                <div>
                  <h2 className="text-2xl text-gray-400 font-semibold">
                    Welcome
                  </h2>
                  <h1 className="text-2xl font-bold">{user.data.username}</h1>
                </div>
                <Link
                  to={"/create/post"}
                  className={
                    " text-center px-2 py-2 rounded-full bg-cyan-800 text-base sm:text-lg font-semibold text-white"
                  }
                >
                  Create Post
                </Link>
              </div>
            )}

            {post.post?.length > 0 ? (
              <>
                <InfiniteScroll
                  next={fetchMore}
                  hasMore={ok}
                  loader={<div className="text-center">Loader</div>}
                  dataLength={post.post.length}
                  className={"space-y-10 pb-10 overflow-y-hidden"}
                >
                  {post.post?.map((i) => (
                    <BlogItem key={i._id} data={i} />
                  ))}
                </InfiniteScroll>
              </>
            ) : (
              <h1 className="text-center text-4xl font-semibold">
                No Post To Show
              </h1>
            )}
          </div>
        </motion.div>
      )}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
