import defaultUser from "../access/default.png";
import InnerChangePasswordForm from "../components/Form/FormElement/InnerChangePassword.form.jsx";
import { innerChangePassword } from "../store/actions/userAction.js";
import { useDispatch } from "react-redux";
import Loading from "./Loading.jsx";
import { useNavigate } from "react-router-dom";

const InnerChangePassword = ({ user }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onSubmit = async (e) => {
    delete e.confirmPassword;
    const res = await innerChangePassword(dispatch, e);
    if (res) {
      nav("/blog");
    }
  };

  return (
    <>
      {user.loading ? (
        <Loading />
      ) : (
        <div className="pt-20 min-h-screen max-w-screen flex justify-center items-center">
          <div className="bg-white py-14 px-5 sm:px-10 w-[98%] sm:w-[50%] lg:w-[40%] 2xl:w-[30%]">
            <h1 className="text-xl sm:text-3xl text-center font-bold">
              Change your password
            </h1>
            <div className="w-[130px] h-[130px] mt-1 rounded-full mx-auto">
              <img
                className="rounded-full w-full h-full object-cover"
                src={
                  user.data?.avatar
                    ? `http://localhost:4000/upload/User/${user.data.avatar}`
                    : defaultUser
                }
                alt=""
              />
            </div>
            <h2 className={"text-center text-lg sm:text-xl font-semibold mt-2"}>
              {user.data?.username}
            </h2>
            <InnerChangePasswordForm submit={onSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default InnerChangePassword;
