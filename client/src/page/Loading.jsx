import Logo from "../access/logo.png";

const Loading = () => {
  return (
    <div className="w-screen fixed top-0 left-0 bg-white z-[2000] h-screen">
      <div className="flex items-center justify-center h-screen">
        <img src={Logo} alt="login.png" />
      </div>
    </div>
  );
};

export default Loading;
