import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { dropPost, GetPost } from "../store/actions/postAction.js";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading.jsx";
import { AiFillCalendar } from "react-icons/all";
import CommentForm from "../components/Form/FormElement/Comment.form.jsx";

const InnerBlog = () => {
  const param = useParams();
  const data = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    GetPost(dispatch, param.id);
  }, []);

  const handleBack = () => {
    nav(-1);
  };

  const handleEdit = () => {
    nav("/blog/edit");
  };

  const handleDelete = async () => {
    await dropPost(dispatch, param.id);
    if (data.perPost) {
      nav("/blog");
    }
  };

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-[95%] lg:w-[70%] mx-auto pt-28">
            <div className="w-full sm:w-[80%] 2xl:w-[70%] mx-auto">
              <div className="w-[full] break-words">
                <h1 className="text-2xl">{data.perPost?.title}</h1>
              </div>
              <div className="w-full h-[400px] mt-5">
                <img
                  src={
                    data.perPost?.image &&
                    `http://localhost:4000/upload/Post/${data.perPost.image}`
                  }
                  className="w-full rounded-xl h-full object-cover"
                  alt=""
                />
              </div>
              <div className={"mt-5 flex justify-between"}>
                <p className="text-gray-500">
                  Posted By{" "}
                  <span className="font-semibold text-black">
                    {data.perPost?.user.username}
                  </span>
                </p>
                <div className="flex items-center space-x-2">
                  <AiFillCalendar className="mb-1" />
                  <p>
                    {new Date(data.perPost?.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-5 text-gray-500 text-sm">
                <p>{data.perPost?.description}</p>
              </div>

              {user.isAuthorization && <CommentForm data={user} />}

              <div className="border space-x-4 flex justify-center my-10 py-5 rounded-2xl">
                <button
                  onClick={handleBack}
                  className="px-5 py-1 border rounded-full border-cyan-800 duration-300 hover:bg-cyan-800 hover:text-white"
                >
                  All Post
                </button>
                {user.isAuthorization &&
                  user.data?._id === data.perPost?.user._id && (
                    <>
                      <button
                        onClick={handleEdit}
                        className="px-5 border-teal-500 py-1 border rounded-full duration-300 hover:bg-teal-500 hover:text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={handleDelete}
                        className="px-5 border-red-400 py-1 border rounded-full duration-300 hover:bg-red-400 hover:text-white"
                      >
                        Delete
                      </button>
                    </>
                  )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InnerBlog;
