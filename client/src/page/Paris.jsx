import LargeImage from "../access/andrea-maschio-UEY9zNRK5RU-unsplash.jpg";
import daniel from "../access/mobile_paris.jpg";
import One from "../access/wave.jpg";
import two from "../access/alex-harmuth-bOICdD-Gulk-unsplash.jpg";
import three from "../access/rumman-amin-OgnVdTrITzg-unsplash.jpg";
import paris from "../access/daniel-roe-pXh99EfQqvE-unsplash.jpg";
import arthur from "../access/arthur-humeau-3xwdarHxHqI-unsplash.jpg";
import sebastien from "../access/sebastien-gabriel-gyUVNafCIG8-unsplash.jpg";
import andrea from "../access/andrea-maschio-UEY9zNRK5RU-unsplash.jpg";
import Logo from "../access/logo.png";
import {
  AiOutlineInstagram,
  GrTwitter,
  ImFacebook,
  ImYoutube,
} from "react-icons/all.js";
import { motion } from "framer-motion";

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

const Paris = () => {
  return (
    <motion.div
      variants={animation}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="min-h-[100vh] relative z-[20] w-screen bg-gray-300"
    >
      <div className="w-screen z-[0] relative h-[700px] bg-violet-500">
        <img src={LargeImage} className={"w-full h-full object-cover"} alt="" />
        <div className="absolute top-[50%] text-3xl sm:text-5xl font-semibold text-cyan-900 left-5 sm:left-10 sm:space-y-3">
          <h1>Paris . France</h1>
          <p>Your next favorite destination</p>
        </div>
      </div>

      {/*main lorem*/}
      <div className="w-[95%] 2xl:w-[80%] mx-auto min-h-[300px] top-[-100px] lg:mb-10 relative bg-gray-300">
        <div className="lg:absolute z-[200] px-5 py-5 flex flex-wrap lg:flex-nowrap justify-between  mx-auto min-h-[380px] gap-4 bg-white">
          <div className="w-full lg:w-[70%]">
            <h1 className="text-4xl mb-8">Top Reasons to visit Paris</h1>
            <p className="text-xl  leading-9">
              Paris, the capital of France, has a population of over two million
              people and is one of Europe's most-visited cities. Paris has a
              place on pretty much every traveler's bucket list. It is known as
              the most romantic city in the world, and is home to some world
              famous sights that are constantly shown in travel magazines,
              movies, and other works of art. French cuisine is also world
              famous, and you can find some of the best of it in Paris. There is
              world class shopping and a dynamic fashion scene, and plenty of
              interesting museums and art galleries
            </p>
          </div>
          <div className="w-full h-[300px] lg:w-[30%]">
            <img src={daniel} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>

      {/*lorem*/}
      <div className="bg-gray-300 w-full  lg:mt-0 h-full">
        <div className="flex flex-wrap w-[95%] space-y-3 lg:space-y-0 2xl:w-[80%] mx-auto justify-between">
          <div className="bg-white w-full lg:w-[26%] py-5 px-5">
            <h1 className="underline text-xl text-center  mb-5 underline-offset-၈">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="leading-6 tracking-wider break-all">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ducimus, error esse impedit ipsam iusto laudantium libero mollitia
              porro quae quam, qui quos rem saepe sapiente sit tenetur unde
              voluptates. Amet dicta est impedit ipsa, molestias officia quam
              quia tenetur! Ab animi eveniet facere fuga harum, illo ipsam magni
              nesciunt nihil pariatur porro, possimus quam quas quos repudiandae
              totam vitae. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ad aperiam aut dolores enim est expedita, ipsam ipsum itaque
              libero necessitatibus officia perspiciatis quibusdam quisquam
              ullam unde! Autem id iure mollitia.
            </p>
          </div>
          <div className="bg-white w-full lg:w-[26%] py-5 px-5">
            <h1 className="underline text-xl text-center  mb-5 underline-offset-၈">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="leading-6 tracking-wider break-all">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ducimus, error esse impedit ipsam iusto laudantium libero mollitia
              porro quae quam, qui quos rem saepe sapiente sit tenetur unde
              voluptates. Amet dicta est impedit ipsa, molestias officia quam
              quia tenetur! Ab animi eveniet facere fuga harum, illo ipsam magni
              nesciunt nihil pariatur porro, possimus quam quas quos repudiandae
              totam vitae. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ad aperiam aut dolores enim est expedita, ipsam ipsum itaque
              libero necessitatibus officia perspiciatis quibusdam quisquam
              ullam unde! Autem id iure mollitia.
            </p>
          </div>
          <div className="bg-white w-full lg:w-[26%] py-5 px-5">
            <h1 className="underline text-xl text-center  mb-5 underline-offset-၈">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="leading-6 tracking-wider break-all">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ducimus, error esse impedit ipsam iusto laudantium libero mollitia
              porro quae quam, qui quos rem saepe sapiente sit tenetur unde
              voluptates. Amet dicta est impedit ipsa, molestias officia quam
              quia tenetur! Ab animi eveniet facere fuga harum, illo ipsam magni
              nesciunt nihil pariatur porro, possimus quam quas quos repudiandae
              totam vitae. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ad aperiam aut dolores enim est expedita, ipsam ipsum itaque
              libero necessitatibus officia perspiciatis quibusdam quisquam
              ullam unde! Autem id iure mollitia.
            </p>
          </div>
        </div>
      </div>

      {/*what to do*/}
      <div className="w-[95%] 2xl:w-[90%] relative mx-auto h-[550px] mt-20">
        <img src={One} className="mx-auto object-cover w-full h-full" />
        <div className="absolute top-[50%] w-[250px] px-2 py-2 text-center right-[50%] left-[50%] translate-x-[-50%] bg-white">
          <h2 className="capitalize text-2xl">Where to chill in paris</h2>
        </div>
      </div>

      <div className="w-[95%] 2xl:w-[90%] relative mx-auto h-[550px] mt-20">
        <img src={two} className="mx-auto object-cover w-full h-full" />
        <div className="absolute top-[50%] w-[250px] px-2 py-2 text-center right-[50%] left-[50%] translate-x-[-50%] bg-white">
          <h2 className="capitalize text-2xl">Where to eat in paris</h2>
        </div>
      </div>

      <div className="w-[95%] 2xl:w-[90%] relative mx-auto h-[550px] mt-20">
        <img src={three} className="mx-auto object-cover w-full h-full" />
        <div className="absolute top-[50%] w-[230px] px-2 py-2 text-center right-[50%] left-[50%] translate-x-[-50%] bg-white">
          <h2 className="capitalize text-2xl">What to do in paris</h2>
        </div>
      </div>
      {/*related post*/}
      <div className="flex flex-row sm:space-x-10 py-10 justify-center w-full">
        <div className="border-b border-b-2 border-b-gray-900 h-[15px] sm:h-[20px] w-[100px] sm:w-[300px]" />
        <h1 className={"text-xl sm:text-5xl text-center capitalize"}>
          Related posts
        </h1>
        <div
          className={
            "border-b border-b-2 border-b-gray-900 h-[15px] sm:h-[20px] w-[100px] sm:w-[300px]"
          }
        />
      </div>

      <div className="w-[95%] 2xl:w-[90%] flex flex-wrap lg:gap-0 justify-between mx-auto pb-20">
        <div className="h-[500px] relative mb-10 lg:m-0 w-full sm:w-[49%] lg:w-[23%]">
          <img src={paris} className={"w-full h-full object-cover"} alt="" />
          <div className="absolute -bottom-[20px] text-center text-xl left-[50%] right-[50%] translate-x-[-50%] px-1 py-1 w-[50%] bg-white">
            <p>Tips for your first trip to paris</p>
          </div>
        </div>
        <div className="h-[500px] relative mb-10 lg:m-0 w-full sm:w-[49%] lg:w-[23%]">
          <img src={arthur} className={"w-full h-full object-cover"} alt="" />
          <div className="absolute -bottom-[20px] text-center text-xl left-[50%] right-[50%] translate-x-[-50%] px-1 py-1 w-[50%] bg-white">
            <p>Tips for Traveling paris on a Budget</p>
          </div>
        </div>
        <div className="h-[500px] relative mb-10 lg:m-0 w-full sm:w-[49%] lg:w-[23%]">
          <img
            src={sebastien}
            className={"w-full h-full object-cover"}
            alt=""
          />
          <div className="absolute -bottom-[20px] text-center text-xl left-[50%] right-[50%] translate-x-[-50%] px-1 py-1 w-[60%] bg-white">
            <p>Itinerary for Travelling Europe by Train</p>
          </div>
        </div>
        <div className="h-[500px] relative mb-10 lg:m-0 w-full sm:w-[49%] lg:w-[23%]">
          <img src={andrea} className={"w-full h-full object-cover"} alt="" />
          <div className="absolute -bottom-[20px] text-center text-xl left-[50%] right-[50%] translate-x-[-50%] px-1 py-1 w-[50%] bg-white">
            <p>The Coolest Airbubs in Paris</p>
          </div>
        </div>
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
    </motion.div>
  );
};

export default Paris;
