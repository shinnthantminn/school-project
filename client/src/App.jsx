import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Alert from "./components/ErrorAlert/Alert";
import Dashboard from "./page/Dashboard.jsx";
import setHeader from "./helper/setHeader.js";
import { useEffect } from "react";
import { authorization } from "./store/actions/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar.jsx";
import ForgotPassword from "./page/ForgotPassword.jsx";
import ChangePassword from "./page/ChangePassword.jsx";
import LandingPage from "./page/LandingPage.jsx";
import Blog from "./page/Blog.jsx";
import InnerChangePassword from "./page/InnerChangePassword.jsx";
import CreatePost from "./page/CreatePost.jsx";
import InnerBlog from "./page/InnerBlog.jsx";
import EditPost from "./page/EditPost.jsx";
import Paris from "./page/Paris.jsx";
import InstaGallery from "./page/InstaGallery.jsx";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const location = useLocation();

  if (localStorage.token) {
    setHeader(localStorage.token);
  }

  useEffect(() => {
    if (
      localStorage.token &&
      location.pathname !== "/change&password" &&
      location.pathname !== "/forgot&password"
    ) {
      authorization(dispatch);
    }
  }, []);

  return (
    <div className={"overflow-x-hidden"}>
      <Alert />
      <Navbar />
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/blog"} element={<Blog user={user} />} />
          <Route path={"/Signin"} element={<Login />} />
          <Route path={"/signup"} element={<Register />} />
          <Route path={"/forgot&password"} element={<ForgotPassword />} />
          <Route path={"/change&password"} element={<ChangePassword />} />
          <Route path={"/profile&edit"} element={<Dashboard />} />
          <Route
            path={"/password&change"}
            element={<InnerChangePassword user={user} />}
          />
          <Route path={"/insta"} element={<InstaGallery />} />
          <Route path={"/paris"} element={<Paris />} />
          <Route path={"/create/post"} element={<CreatePost />} />
          <Route path={"/blog/:id"} element={<InnerBlog />} />
          <Route path={"/blog/edit/"} element={<EditPost />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
