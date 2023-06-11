import { useNavigate } from "react-router-dom";
import Footer from "../../UI/Footer";
import top from "../../UI/Posters/rezerwacje.png";
import {useEffect,useState} from "react";
import {useCookies} from "react-cookie";
const NowOnScreen = () => {
  const navigate = useNavigate();

const [movies,setMovies]=useState([])
  const [input,setInput]=useState("")
  const [cookie]=useCookies()
  console.log(cookie)

  useEffect(() => {
    if (!cookie.Role) navigate("/login/cinemaAdmin");
    if (cookie.Role !== "cinemaAdmin") {
      navigate("/login/cinemaAdmin");
    }
  }, []);

  useEffect(()=>{
    fetch(`http://localhost:3000/cinema/getMovies/${cookie.UserData.id}/`, {
      headers: {
        'Authorization': 'Bearer ' + cookie.Token,
      }
    }).then(res => res.json()).then(data => setMovies(data.movies))
  },[])

  console.log(movies)

  const deleteCinema=(id)=>{
    console.log(id)
    fetch(`http://localhost:3000/cinema/deleteMovie/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + cookie.Token,
      },
      method:"DELETE",
      body:JSON.stringify({id:id})
    }).then(()=>{
      fetch(`http://localhost:3000/cinema/getMovies/${cookie.UserData.id}/`, {
        headers: {
          'Authorization': 'Bearer ' + cookie.Token,
        }
      }).then(res => res.json()).then(data => setMovies(data.movies))
    })
  }

  const undeleteCinema=(id)=>{
    fetch(`http://localhost:3000/cinema/undeleteMovie/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + cookie.Token,
      },
    }).then(()=>{
      fetch(`http://localhost:3000/cinema/getMovies/${cookie.UserData.id}/`, {
        headers: {
          'Authorization': 'Bearer ' + cookie.Token,
        }
      }).then(res => res.json()).then(data => setMovies(data.movies))
    })

  }

  if(!movies) return;
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
          <div className={"overflow-x-auto w-full mt-8"}>
            <input onChange={(e)=>setInput(e.target.value)} type={'text'} className={'input input-bordered mb-5 w-full max-w-xs"'} placeholder={'Wpisz tytuł'}/>

            <table className={"table  w-full overflow-x-auto"}>
              <thead className="text-center text-white">
                <tr>
                  <th>Okładka</th>
                  <th>Nazwa filmu</th>
                  <th className={'w-32'}>Opis</th>

                  <th>Przyciski akcji</th>
                </tr>
              </thead>

              {movies.filter(movie=>movie.title.includes(input)).map(movie=>
                  <tr className="text-center">
                    <td className=" flex justify-center underline  decoration-purple decoration-2 text-2xl text-white">
                      <img src={movie.images[0]} className="object-fill"></img>
                    </td>{" "}
                    <td className="underline  decoration-purple decoration-2 text-2xl text-white">
                      {movie.title}
                    </td>{" "}
                    <td className="underline  decoration-purple w-32  decoration-2 text-2xl text-white">
                      <span className={'w-32 break-all'}>
                      {movie.description}
                        </span>
                    </td>{" "}
                    <td>
                      <button onClick={()=>navigate(`/booking/${movie.id}`)} className={"btn px-2"}>Pokaz film</button>{" "}
                      {movie.deleted?<button onClick={()=>undeleteCinema(movie.id)} className={"btn btn-success "}>Przywróć film</button>:<button onClick={()=>deleteCinema(movie.id)} className={"btn btn-error "}>Usun film</button>}{" "}
                    </td>
                  </tr>
              )}

            </table>
          </div>
        </div>

        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 sm:w-80 w-40 bg-base-100">
            <li onClick={() => navigate("/cienmaadminnowonscreen")}>
              <a>Lista aktualnie wyświetlanych filmów </a>
            </li>
            <li onClick={() => navigate("/cienmaadminactivereservation")}>
              <a>Aktywne rezerwacje</a>
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

export default NowOnScreen;
