import { memo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  return (
    <div className="fixed top-20 z-[500000]">
      <ToastContainer pauseOnHover={false} />
    </div>
  );
};

export default memo(Alert);
