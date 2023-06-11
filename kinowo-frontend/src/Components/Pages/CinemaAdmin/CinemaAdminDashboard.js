import { useNavigate } from "react-router-dom";
import top from "../../UI/Posters/rezerwacje.png"
import intru from "../../UI/Posters/niewiem.png";
import Footer from "../../UI/Footer";
import {useCookies} from "react-cookie";
import {useEffect} from "react";


const CinemaAdminDashboard = () => {
  const [cookie]=useCookies()
  console.log(cookie)
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookie.Role) navigate("/login/cinemaAdmin");
    if (cookie.Role !== "cinemaAdmin") {
      navigate("/login/cinemaAdmin");
    }
  }, []);

  return (
    <>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar border-2 border-l-transparent border-r-transparent border-t-transparent border-b-purple rounded-null ">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <p onClick={() => navigate("/cienmaadmindashboard")} className="cursor-pointer flex-1 px-2 mx-2 normal-case sm:text-4xl tracking-widest text-left pl-8">
              {" "}
              KINOWO
            </p>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                <li onClick={() => navigate("/cienmaadminnowonscreen")}>
                  <a>Lista aktualnie wyświetlanych filmów </a>
                </li>
                <li onClick={() => navigate("/addmovie")}>
                  <a>Dodaj film</a>
                </li>
                <li>
                  {" "}
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.7163 2.75482H7.21631V2.75482C4.73103 2.75482 2.71631 4.76954 2.71631 7.25482V16.7422C2.71631 19.2275 4.73103 21.2422 7.21631 21.2422V21.2422H11.7163"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9761 11.9986H21.3529M21.3529 11.9986L17.8053 8.45093M21.3529 11.9986L17.8053 15.5462"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap m-8">
            <div className="">
              <p className="text-white sm:text-6xl text-2xl underline underline-offset-2 decoration-purple decoration-2">
                {" "}
                Panel administratora kin.{" "}
              </p>

              <p className="text-white sm:text-center md:text-left sm:w-1/3 w-full mt-6">
                W tym miejscu możesz znaleźć dwa panele odpowiadająco lista
                aktualnie wyświetlanych filmów w naszym serwisie, oraz listę
                aktywnych rezerwacji które zostały zarejestrowane w naszym
                serwsie.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-24">
              <div>
                <p className="text-2xl text-white text-3xl">
                  {" "}
                  Dodawanie filmu
                </p>
                <p className="text-start mt-2 max-w-xs text-white">
                  Specjalnie przygotowane miejsce gdzie możesz w wygodny i szybki sposób dodać film do swojego kina
                </p>
              </div>
              <div className="flex justify-center h-full">
                <img src={intru} alt="poster"></img>
              </div>
              <div className="mt-24 justify-center">
                <div className=" invisible  xl:visible border-2 border-l-purple  h-64 border-r-purple border-t-transparent border-b-transparent ">
                  <p className="text-4xl text-white text-center">
                    Szybka i łatwa administracja danymi
                  </p>
                </div>
              </div>
              <div className="flex justify-center ">
                <img src={top} alt="poster"></img>
              </div>
              <div>
                <p className="text-3xl sm:text-start text-white xl:text-end">
                  {" "}
                  Aktywne rezerwacje
                </p>
                <p className="sm:text-start lg:text-end mt-2 text-white">
                  Nasza platforma została stworzona z myślą o zapewnieniu
                  wygodnego i łatwego sposobu rezerwacji biletów do ulubionych
                  filmów.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 sm:w-80 w-40 bg-base-100">
            <li>
              <a>Lista użytkowników</a>
            </li>
            <li>
              <a>Lista kin</a>
            </li>
            <li>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.7163 2.75482H7.21631V2.75482C4.73103 2.75482 2.71631 4.76954 2.71631 7.25482V16.7422C2.71631 19.2275 4.73103 21.2422 7.21631 21.2422V21.2422H11.7163"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9761 11.9986H21.3529M21.3529 11.9986L17.8053 8.45093M21.3529 11.9986L17.8053 15.5462"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CinemaAdminDashboard;
