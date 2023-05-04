import HeroContent from "./HeroContent";
import HeroSummit from "./HeroSummit";
import Navbar from "./Navabar";

const HeroPage = () => {
  return (
    <div className=" h-screen w-full  Hero__background-img">
      <Navbar></Navbar>
      <HeroContent></HeroContent>
      <HeroSummit></HeroSummit>
    </div>
  );
};

export default HeroPage;
