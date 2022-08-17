import { FaSearch } from "react-icons/all";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const First = () => {
  return (
    <AnimationOnScroll animateIn={"animate__fadeIn"}>
      <div className="first h-screen bg-cover ">
        <div
          className={"h-full flex items-center justify-center flex-col px-5"}
        >
          <h1 className="text-6xl text-center 2xl:text-8xl font-semibold text-white">
            Never Stop Exploring The World
          </h1>

          <div className="w-full sm:w-[70%] 2xl:w-[85%] mt-8 flex  mx-auto space-x-2  items-center  items-center">
            <input
              type="text"
              className={"w-full px-3 py-3 outline-0 text-xl rounded-3xl"}
              placeholder={"Where You Want To Visit?"}
            />
            <FaSearch className={"text-white text-3xl cursor-pointer"} />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default First;
