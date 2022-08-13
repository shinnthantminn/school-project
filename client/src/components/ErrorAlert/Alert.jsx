import { memo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  return (
    <>
      <ToastContainer pauseOnHover={false} />
    </>
  );
};

export default memo(Alert);
