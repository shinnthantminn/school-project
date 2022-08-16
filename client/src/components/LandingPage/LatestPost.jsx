import { Link } from "react-router-dom";
import Logo from "../../access/logo.png";
import {
  AiOutlineInstagram,
  GrTwitter,
  ImFacebook,
  ImYoutube,
} from "react-icons/all";

const LatestPost = ({ data: { post } }) => {
  return (
    <div className="w-full pt-5  bg-gray-300">
      <div className="">
        <h1 className="text-center after:content-[''] after:inline-block after:w-[100px] sm:after:w-[200px] lg:after:w-[300px] after:h-[2px] after:mb-[5px] sm:after:mb-[15px] after:bg-gray-700 before:content-[''] before:inline-block before:w-[100px] sm:before:w-[200px] lg:before:w-[300px] before:h-[2px] before:mb-[5px] sm:before:mb-[15px] before:bg-gray-700 text-2xl sm:text-5xl after:ml-2 before:mr-2 sm:after:ml-5 sm:before:mr-5 ">
          Latest Post
        </h1>
      </div>
      <div className="flex flex-wrap justify-center bg-gray-300 lg:space-x-3 mt-10 sm:mt-24">
        {post?.map((i) => (
          <Link
            to={`/blog/${i._id}`}
            key={i._id}
            className="w-[300px] ml-2 mb-5 lg:m-0 duration-300 hover:scale-[1.1] hover:shadow hover:z-[2000] relative h-[400px]"
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={`http://localhost:4000/upload/Post/${i.image}`}
              alt="hello.png"
            />
            <div className="absolute text-white rounded-b-lg px-3 py-3 bg-[#000000aa] w-full bottom-0">
              <h1 className="text-xl mb-2 overflow-hidden text-ellipsis">
                {i.title}
              </h1>
              <p className="text-sm">
                {i.description.length > 300
                  ? `${i.description.slice(0, 200)} read more...`
                  : i.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="py-10 w-full flex justify-center">
        <button className="text-white px-2 py-2 bg-gray-500 rounded">
          I want to explore more
        </button>
      </div>
      <div className="w-full bg-white">
        <div className="flex justify-center py-5 items-center">
          <img src={Logo} alt="" className="w-[300px]" />
        </div>
        <div className="text-2xl flex justify-center items-center space-x-4 pb-5">
          <ImFacebook className="text-blue-600" />
          <AiOutlineInstagram className={"text-pink-600"} />
          <GrTwitter className={"text-blue-600"} />
          <ImYoutube className={"text-red-600"} />
        </div>
        <div className="text-lg pb-5 text-gray-500 flex justify-center items-center space-x-5">
          <p>FAQ</p>
          <p>About Us</p>
          <p>Copyright</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
