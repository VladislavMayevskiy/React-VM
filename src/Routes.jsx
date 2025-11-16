import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from "./CreateUser/LogIn"
import CreateAcc from "./CreateUser/CreateAcc";
import ForgotPass from "./CreateUser/ForgotPass";
import Global from "./landing/Global";
import UserPage from "./User/User";
<<<<<<< HEAD
import CoursePage from "./User/ CoursePage";
=======
>>>>>>> 27a55a12e99e8a5e3919ec5f170c47290b5ff5ff

const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<CreateAcc />} />
        <Route path="/ForgotPass" element={<ForgotPass/>}/>
        <Route path="/home" element={<Global/>} />
        <Route path="/userPage" element={<UserPage/>}/>
<<<<<<< HEAD
        <Route path="/course/:id" element={<CoursePage />} />
=======

>>>>>>> 27a55a12e99e8a5e3919ec5f170c47290b5ff5ff
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
