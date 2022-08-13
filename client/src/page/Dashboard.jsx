import EditProfileForm from "../components/Form/FormElement/EditProfile.form.jsx";
import Loading from "./Loading.jsx";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../store/actions/userAction.js";
import { fetch } from "../ApiCall.js";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    const res = await editProfile(dispatch, value);
    // const res = await fetch.patch("/user/edit/profile", value);
    // console.log(res);
  };

  return (
    <>
      {user.loading ? (
        <Loading />
      ) : (
        <div className="pt-20 min-h-screen w-screen flex justify-center items-center">
          <div className="bg-white py-14 px-5 sm:px-10 w-[98%] sm:w-[50%] lg:w-[40%] 2xl:w-[30%]">
            <h1 className={"text-2xl font-bold text-center mb-2"}>
              Edit Your Profile
            </h1>
            <div>
              <EditProfileForm submit={onSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
