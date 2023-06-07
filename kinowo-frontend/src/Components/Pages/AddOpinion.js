import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";

const AddOpinion = () => {
  return (
    <div className="h-screen ">
      <NavbarDashboard></NavbarDashboard>
      <div className="h-full w-full flex justify-center">
        <div className="h-1/2 border-2 w-4/5 flex justify-center rounded-xl border-purple self-center">
          <div className=" w-1/3 h-full bg-[#171017]"></div>
          <form className="border-2 border-pink w-full"></form>
        </div>
        
      </div>
     
    </div>
  );
};

export default AddOpinion;
