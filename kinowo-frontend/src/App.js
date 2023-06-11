import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HeroPage from "./Components/Pages/MainPage/HeroPage";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
// import {useContext} from "react";
// import UserContext from "./UserContext";
import UserEdit from "./Components/Pages/UserEdit";
import Film from "./Components/Pages/Film";
import {ChooseSeat} from "./Components/Pages/ChooseSeat/ChooseSeat";
import History from "./Components/Pages/History/History";
import AddMovie from "./Components/Pages/AddMovie";
import AddOpinion from "./Components/Pages/AddOpinion";
import OpinionList from "./Components/Pages/OpinionList";
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";
import {useCookies} from "react-cookie";
import AllMovies from "./Components/Pages/AllMovies/AllMovies";
function App() {
  // const { user } = useContext(UserContext);
  const [cookie]=useCookies()
  console.log(cookie)
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<HeroPage />} />
        <Route path="opinionlist" exact element={<OpinionList />} />
        <Route path="admindashboard" exact element={<AdminDashboard />} />
        <Route path="/addopinion/:id" element={<AddOpinion />} />
        <Route path="addmovie" element={<AddMovie />} />
        <Route path="allmovies/:title" element={<AllMovies />} />
        <Route path="register" element={<Register />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="useredit" element={<UserEdit />} />
        <Route path="booking/:id" element={<Film/>} />
        <Route path="history" element={<History/>} />
        <Route path="/chooseSeat/:id/:movieId/:title/:date" element={<ChooseSeat/>} />
        <Route path={"*"} element={HeroPage}/>
        {/* {user && (
          <Route path="dashboard" element={<Dashboard />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
