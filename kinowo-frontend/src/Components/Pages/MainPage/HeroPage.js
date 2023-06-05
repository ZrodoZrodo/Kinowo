import Footer from "../../UI/Footer";
import About from "../About";
import Map from "../Map";

import HeroContent from "./HeroContent";
import HeroSummit from "./HeroSummit";
import Navbar from "./Navbar";

const HeroPage = () => {
  return (
    <div>
      <div className="max-h-screen w-full min-h-screen Hero__background-img">
        <Navbar></Navbar>
        <HeroContent></HeroContent>
        <HeroSummit></HeroSummit>
      </div>
      <About></About>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
};

export default HeroPage;
