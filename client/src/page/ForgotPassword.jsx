import ForgotPasswordEmailForm from "../components/Form/FormElement/ForgotPasswordEmail.Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifying } from "../store/actions/userAction.js";
import { useState } from "react";
import Loading from "./Loading.jsx";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [state, setState] = useState(false);
  const submit = async (value) => {
    const res = await emailVerifying(dispatch, value);
    console.log(res);
    if (res) {
      setState(res);
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="bg-white py-14 px-5 sm:px-10 w-[98%] sm:w-[50%] lg:w-[40%] 2xl:w-[30%] rounded">
        {user.loading ? (
          <Loading />
        ) : (
          <>
            {state ? (
              <>
                <h1 className="text-center space-x-2 flex items-center justify-center">
                  <p>email was send your email: </p>
                  <span className="text-red-400">{user.data.email}</span>
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-center text-xl font-semibold">
                  Forgot Password
                </h1>
                <ForgotPasswordEmailForm submit={submit} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
