import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Components/Pages/MainPage/HeroPage";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { useContext } from "react";
import UserContext from "./UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<HeroPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* {user && (
          <Route path="dashboard" element={<Dashboard />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
