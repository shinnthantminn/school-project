import { Link } from "react-router-dom";
import Logo from "../../access/logo.png";
import defaultUser from "../../access/default.png";
import {
  AiOutlineClose,
  FcMenu,
  IoIosArrowDropdownCircle,
} from "react-icons/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AuthNav from "./Auth.nav.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const refer = useRef();
  const dropDownRefer = useRef();

  const { data, isAuthorization } = useSelector((state) => state.user);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        e.path[1] !== refer.current &&
        e.path[3] !== refer.current &&
        e.path[0].id !== "mobile"
      ) {
        setShow(false);
      }

      if (
        e.path[1] !== dropDownRefer.current &&
        e.path[2] !== dropDownRefer.current &&
        e.path[1] !== dropDownRefer.current
      ) {
        setDropDown(false);
      }
    });
  }, []);

  const handleClick = () => {
    setShow((pre) => !pre);
  };

  const handleDropDown = () => {
    setDropDown((pre) => !pre);
  };

  return (
    <div
      id={"top"}
      className="flex z-[1000] flex-wrap bg-white fixed w-screen shadow px-2 py-4 lg:px-6 lg:py-5 border-b top-0 justify-between items-center"
    >
      <div className="text-2xl">
        <Link to={"/"}>
          <img src={Logo} alt="logo.png " className="w-[170px]" />
        </Link>
      </div>
      <button ref={refer} className="lg:hidden" onClick={handleClick}>
        <FcMenu />
      </button>
      <ul
        id={"mobile"}
        className={
          show
            ? "menu translate-x-[0px]"
            : "menu translate-x-[1000px] lg:translate-x-0"
        }
      >
        <li className="mt-5 lg:hidden w-fit">
          <button onClick={handleClick}>
            <AiOutlineClose />
          </button>
        </li>
        <li className={"w-fit"}>
          <Link to={"/"}>New Places</Link>
        </li>
        <li className={"w-fit"}>
          <Link to={"/"}>Best Budget</Link>
        </li>
        <li className={"w-fit"}>
          <Link to={"/insta"}>Insta Gallery</Link>
        </li>
        <li className={"w-fit"}>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li className={"w-fit relative"}>
          {isAuthorization ? (
            <>
              <div
                onClick={handleDropDown}
                ref={dropDownRefer}
                className={
                  "hidden lg:flex cursor-pointer rounded-full w-[35px] h-[35px] hover:ring-1 duration-300 hover:ring-green-200"
                }
              >
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={
                    data.avatar
                      ? `http://localhost:4000/upload/User/${data.avatar}`
                      : defaultUser
                  }
                  alt=""
                />
              </div>
            </>
          ) : (
            <button
              ref={dropDownRefer}
              className="hidden lg:flex items-center space-x-1"
              onClick={handleDropDown}
            >
              <span>Login/SignUp</span>
              <IoIosArrowDropdownCircle className={"text-green-700"} />
            </button>
          )}
          <div
            className={
              data ? "lg:absolute -left-[100px] top-[40px]" : "lg:absolute"
            }
          >
            <AuthNav drop={dropDown} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
