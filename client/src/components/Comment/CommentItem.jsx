import DefaultUser from "../../access/default.png";
import { BiTime, FaTrash } from "react-icons/all";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0,
  },
};

const CommentItem = ({ data, drop }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const time = Number(new Date(data.createdAt).getTime()) - Number(Date.now());
  const ago = timeAgo.format(new Date() - time, "mini");
  const [show, setShow] = useState(false);

  const user = useSelector((state) => state.user);

  return (
    <AnimationOnScroll animateIn={"animate__fadeIn"}>
      <motion.div
        variants={animation}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className="w-full border rounded-xl px-3 py-5"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <div className="w-[35px] h-[35px]">
              <img
                className={"w-full h-full object-cover rounded-full"}
                src={
                  data.user.avatar
                    ? `http://localhost:4000/upload/User/${data.user.avatar}`
                    : DefaultUser
                }
                alt=""
              />
            </div>
            <div>
              <p className="text-sm text-blue-400 font-semibold">
                {data.user.username}
              </p>
              <div className="flex space-x-1">
                <BiTime />
                <p className="text-sm">{ago} ago</p>
              </div>
            </div>
          </div>
          <div>
            {show && user.data._id === data.user._id && (
              <button onClick={() => drop(data._id)}>
                <FaTrash />
              </button>
            )}
          </div>
        </div>
        <div className="mt-5">{data.comment}</div>
      </motion.div>
    </AnimationOnScroll>
  );
};

export default CommentItem;
