import defaultUser from "../../access/default.png";
import { FaUser } from "react-icons/all";
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-12 pb-10 border-b gap-8">
      <div className="col-span-12 lg:col-span-4 h-[350px]">
        <div className="h-full">
          <img
            className="h-full w-full object-cover rounded-lg "
            src={`http://localhost:4000/upload/Post/${data.image}`}
            alt=""
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 pt-5">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h1 className="overflow-hidden text-ellipsis text-2xl font-semibold mb-5">
              {data.title}
            </h1>
            <p className="text-sm hidden sm:block text-gray-500">
              {data.description.length > 300
                ? `${data.description.slice(0, 300)} ...`
                : data.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {
                <div className="w-[45px] h-[45px]">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={
                      data.user.avatar
                        ? `http://localhost:4000/upload/User/${data.user.avatar}`
                        : defaultUser
                    }
                    alt="logo.png"
                  />
                </div>
              }
              <div>
                <div className="flex space-x-2">
                  <FaUser />
                  <h1 className="text-[600]">{data.user.username}</h1>
                </div>
                <div>{new Date(data.createdAt).toLocaleDateString()}</div>
              </div>
            </div>
            <Link
              className="block px-5 py-2 duration-300 hover:bg-cyan-800 hover:text-white rounded-full border border-cyan-800"
              to={`/blog/${data._id}`}
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
