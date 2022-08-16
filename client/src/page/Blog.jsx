import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GetAllPost } from "../store/actions/postAction.js";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading.jsx";
import BlogItem from "../components/Blog/BlogItem.jsx";
import { Waypoint } from "react-waypoint";
import Footer from "../components/Footer.jsx";

const Blog = ({ user }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    GetAllPost(dispatch, 1);
  }, []);

  const handleEnter = () => {
    console.log("Hello");
  };

  return (
    <>
      {post.loading ? (
        <Loading />
      ) : (
        <div className="w-[95%] lg:w-[70%] mx-auto pt-24">
          <div className="w-full sm:w-[80%] 2xl:w-[70%] mx-auto">
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

            <div className="space-y-10 pb-10">
              {post.post?.map((i) => (
                <BlogItem key={i._id} data={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
