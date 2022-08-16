import First from "../components/LandingPage/First.jsx";
import TopDestination from "../components/LandingPage/TopDestination.jsx";
import LatestPost from "../components/LandingPage/LatestPost.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLatestPost } from "../store/actions/postAction.js";

const LandingPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    GetLatestPost(dispatch);
  }, []);

  return (
    <div className="max-h-[100vh] bg-gray-300">
      <First />
      <TopDestination />
      <LatestPost data={post} />
    </div>
  );
};

export default LandingPage;
