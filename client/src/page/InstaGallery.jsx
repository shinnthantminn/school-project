import user from "../access/instaGallery/IMG_8994.png";
import One from "../access/instaGallery/imgGallery1.jpg";
import Two from "../access/instaGallery/imgGallery2.jpg";
import Three from "../access/instaGallery/imgGallery3.jpg";
import Four from "../access/instaGallery/imgGallery4.jpg";
import Five from "../access/instaGallery/imgGallery5.jpg";
import Six from "../access/instaGallery/imgGallery6.jpg";
import Seven from "../access/instaGallery/imgGallery7.jpg";
import eight from "../access/instaGallery/imgGallery8.jpg";
import nine from "../access/instaGallery/imgGallery9.jpg";
import ten from "../access/instaGallery/imgGallery10.jpg";
import twelve from "../access/instaGallery/imgGallery11.jpg";
import thirty from "../access/instaGallery/imgGallery12.jpg";
import Logo from "../access/logo.png";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  GrTwitter,
  ImFacebook,
  ImYoutube,
} from "react-icons/all.js";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

const animation = {
  hidden: {
    x: -1400,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -1400,
  },
};

const InstaGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const pto = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    eight,
    nine,
    ten,
    twelve,
    thirty,
  ];

  const handleClick = (index) => {
    setOpen(true);
    setIndex(index);
  };

  return (
    <motion.div
      variants={animation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="w-[96%] lg:w-[70%] xl:w-[60%] pt-28 mx-auto h-screen"
    >
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="w-[200px] h-[200px] ">
          <img
            src={user}
            className="w-full rounded-full h-full object-cover"
            alt={"user.png"}
          />
        </div>
        <div className="space-y-5">
          <div className="flex  items-center sm:items-baseline mt-5 lg:mt-0 flex-col lg:flex-row lg:justify-start space-y-3 sm:space-y-0 sm:space-x-5">
            <h1 className="text-xl sm:text-4xl">M.Noe</h1>
            <button className="px-3 py-1 border text-sm">
              Click to flow My Instagram
            </button>
          </div>
          <div className="flex justify-center sm:justify-start  space-x-5 sm:space-x-10">
            <p className="text-base">12 posts</p>
            <p className="text-base">5.5k followers</p>
            <p className="text-base">215 following</p>
          </div>
          <p className="text-center">
            You don't have to rich to travel well, For tips: follow me! 📸 🏖 🛏
          </p>
        </div>
      </div>

      {open && (
        <Lightbox
          mainSrc={pto[index]}
          onCloseRequest={() => setOpen(false)}
          nextSrc={pto[(index + 1) % pto.length]}
          prevSrc={pto[(index + pto.length - 1) % pto.length]}
          nextLabel={"next"}
          onMovePrevRequest={() => {
            setIndex((index + pto.length - 1) % pto.length);
          }}
          onMoveNextRequest={() => {
            setIndex((index + 1) % pto.length);
          }}
        />
      )}

      {/**/}

      <div className="flex flex-wrap gap-4 py-20 justify-center">
        {pto.map((i, inx) => (
          <div
            onClick={() => handleClick(inx)}
            key={inx}
            className="w-full sm:w-[30%] h-[30%] cursor-pointer"
          >
            <img src={i} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/**/}
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
    </motion.div>
  );
};

export default InstaGallery;
