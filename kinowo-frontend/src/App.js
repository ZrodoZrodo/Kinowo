import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Components/Pages/MainPage/HeroPage";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { useContext } from "react";
import UserContext from "./UserContext";
import UserEdit from "./Components/Pages/UserEdit";
import Film from "./Components/Pages/Film";
import {ChooseSeat} from "./Components/Pages/ChooseSeat/ChooseSeat";
import History from "./Components/Pages/History/History";
import AddMovie from "./Components/Pages/AddMovie";
import AddOpinion from "./Components/Pages/AddOpinion";
import {AdminPage} from "./Components/Pages/AdminPage/AdminPage";
function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<HeroPage />} />
        <Route path="addopinion" element={<AddOpinion />} />
        <Route path="addmovie" element={<AddMovie />} />
        <Route path="register" element={<Register />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="useredit" element={<UserEdit />} />
        <Route path="booking" element={<Film/>} />
        <Route path="history" element={<History/>} />
        <Route path="/chooseSeat/:id" element={<ChooseSeat/>} />
        <Route path="/adminPage" element={<AdminPage/>} />
        {/* {user && (
          <Route path="dashboard" element={<Dashboard />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
