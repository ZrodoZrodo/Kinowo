import Footer from "../../UI/Footer";
import NavbarDashboard from "../../UI/NavbarDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="bg-dark-purple h-screen w-full">
        <NavbarDashboard></NavbarDashboard>
        <div className="grid justify-items-center w-full mb-4">
          <div className="border-2 border-l-transparent border-r-transparent border-t-purple border-b-transparent rounded-null w-1/2  "></div>
          <div className="Dashboard_banner w-4/6 sm:h-80  mt-6 grid ">
            <p className=" text-xl m-6 text-dashboard-pink">
              Witaj w naszym serwisie!
            </p>
            <p className="text-xl m-6 text-[#DBC5D0] place-self-end ">
              <p className="text-3xl">Odkryj Mistrzostwo Kina!</p> <br></br>Przygotuj się na wspaniałą
              przygodę w magicznym świecie kinematografii! Zapraszamy Cię do
              skorzystania z naszych niezrównanych usług kinowych. Czas na
              chwilę oderwania się od rzeczywistości i zanurzenie w pełne emocji
              historie, które ożywają na wielkim ekranie.
            </p>
          </div>
          <div className="grid grid-cols-3  gap-4 place-items-center w-full mt-24 ">
            <div className="Burger text-3xl text-center w-1/2 ">
              <p className="m-2 text-dashboard-pink">Edytuj dane konta</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="block m-auto h-32 w-24 "
              >
                <circle
                  cx="11.5833"
                  cy="6.8124"
                  r="4.06966"
                  stroke="blue"
                  stroke-width="1.5"
                />
                <path
                  d="M11.6906 21.1906C5.78734 21.1906 3.05127 21.1906 3.05127 17.9903C3.05127 14.79 7.43732 13.322 11.6906 13.322C13.4843 13.322 14.2667 13.2845 15.7245 13.8264"
                  stroke="blue"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M15.1187 18.8745L19.1016 12.7399L21.6141 14.3712L17.4451 20.7925L15.2495 21.649L15.1187 18.8745Z"
                  stroke="blue"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Burger text-3xl text-center w-1/2 ">
              <p className="m-2 text-dashboard-pink">Rezerwuj bilety</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="block m-auto h-32 w-24 "
              >
                <path
                  d="M9.88161 18.4049L13.4975 4.91031C13.5731 4.62789 13.4055 4.33759 13.1231 4.26191L7.38438 2.72423C7.10195 2.64855 6.81166 2.81615 6.73598 3.09858L3.12013 16.5931C2.61983 18.4603 3.72787 20.3794 5.595 20.8797C7.46213 21.38 9.38131 20.272 9.88161 18.4049Z"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 20.9999L20.4706 20.9999C20.763 20.9999 21 20.7629 21 20.4705V14.5293"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 17.6H6.502V17.602H6.5V17.6Z"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.97998 20.6713L20.6416 14.7671C20.9066 14.6435 21.0213 14.3285 20.8977 14.0635L18.3869 8.67897C18.2633 8.41398 17.9483 8.29933 17.6833 8.4229L12.03 11.0591"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Burger text-3xl text-center w-1/2 ">
              <p className="m-2 text-dashboard-pink">Historia</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="block m-auto h-32 w-24 "
              >
                <path
                  d="M10 8H5V3"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.29053 16.3571C6.22236 17.792 7.58966 18.8904 9.19169 19.4909C10.7937 20.0915 12.5461 20.1627 14.1916 19.6939C15.837 19.2252 17.2889 18.2413 18.3339 16.8867C19.379 15.5321 19.9623 13.8781 19.9981 12.1675C20.034 10.457 19.5205 8.78004 18.533 7.38284C17.5456 5.98564 16.1362 4.94181 14.5118 4.4046C12.8874 3.86738 11.1336 3.86509 9.50784 4.39805C7.88206 4.93101 6.46997 5.97114 5.47887 7.36575"
                  stroke="blue"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="border-2 border-l-purple border-r-transparent border-t-transparent border-b-transparent rounded-null  h-24 mt-24"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
