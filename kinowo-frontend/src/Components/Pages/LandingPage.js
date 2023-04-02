import { Link } from "react-router-dom";
import ButtonLandingPage from "../UI/Button";

const LandingPage = (props) => {
  return (
    <div className="Landing w-full h-max">
      <Link to="/register">
        <ButtonLandingPage>Rejestracja</ButtonLandingPage>
      </Link>
    </div>
  );
};

export default LandingPage;
