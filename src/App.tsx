import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLoader from "./component/loaders/pageLoader";
import Explore from "./routes/explore";
// import LandingPage from "./routes/landingPage";
// import Profile from "./routes/profile";
import LandingPage from "./routes/landingPage";

const Home = lazy(() => import("../src/routes/Home"));
const Signup = lazy(() => import("../src/routes/auth/signup/index"));
const Signin = lazy(() => import("../src/routes/auth/signin/index"));
const Welcome = lazy(() => import("../src/routes/onboarding/welcome"));
const Status = lazy(() => import("../src/routes/onboarding/status"));
const Student = lazy(() => import("../src/routes/onboarding/student"));
const Corper = lazy(() => import("../src/routes/onboarding/corper"));
const Prof = lazy(() => import("../src/routes/onboarding/prof"));
const EditProfile = lazy(() => import("../src/routes/editProfile/index"))
const ForgotPassword = lazy(() => import("../src/routes/auth/forgotPassword/index"))
const AddFriends = lazy(() => import("../src/routes/onboarding/addFriends"));
const CommentThread = lazy(() => import("./routes/commentThread/index"));
const FilledProfileState = lazy(() => import("./routes/profile/userProfile"));
const Profile = lazy(() => import("./routes/profile/index"));
const Notification = lazy(() => import("./routes/notification/index"));
const AboutUs = lazy(() => import("../src/routes/aboutUs/index"));
const Followers = lazy(() => import("../src/routes/followers/index"));
// const LandingPage = lazy(async () => {
//   await new Promise((resolve) => setTimeout(resolve, 9000));
//   return import("./routes/landingPage");
// });

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/feed/comment" element={<CommentThread />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/profile" element={<FilledProfileState />} />
          <Route path="/user/edit" element={<EditProfile />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/status" element={<Status />} />
          <Route path="/student" element={<Student />} />
          <Route path="/prof" element={<Prof />} />
          <Route path="/corper" element={<Corper />} />

          <Route path="/profile/:type" element={<Followers />} />
          <Route path="/addfriends" element={<AddFriends />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
