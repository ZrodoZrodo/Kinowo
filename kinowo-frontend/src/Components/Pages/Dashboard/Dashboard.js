import Footer from "../../UI/Footer";
import NavbarDashboard from "../../UI/NavbarDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="bg-dark-purple h-screen w-full">
        <NavbarDashboard></NavbarDashboard>
        <div className="grid justify-items-center w-full">
          <div className="border-2 border-l-transparent border-r-transparent border-t-purple border-b-transparent rounded-null w-1/2  "></div>
          <div className="Dashboard_banner w-4/6 h-96  grid ">
            <p className=" text-3xl m-6 text-dashboard-pink">
              Witaj w naszym serwisie!
            </p>
            <p className="text-xl m-4 text-left w text-white">
              Jesteśmy bardzo zadowoleni, że zdecydowałeś/aś się spędzić u nas
              swój czas i zobaczyć niezapomniane filmy na wielkim ekranie. W
              ramach naszej promocji "Pierwszy raz w naszym kinie? Należy Ci się
              promocja" chcemy nagrodzić Ciebie za wybór naszej sali.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
