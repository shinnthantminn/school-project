import { MdOutlineKeyboardArrowUp } from "react-icons/all";

const Footer = ({ link }) => {
  return (
    <div className="flex justify-between items-center px-5 py-5 bg-cyan-800">
      <h1 className="text-white">
        Copy right &copy; The Explorers | All Rights Reserved
      </h1>
      <div className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <MdOutlineKeyboardArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
