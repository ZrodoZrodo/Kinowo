import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
