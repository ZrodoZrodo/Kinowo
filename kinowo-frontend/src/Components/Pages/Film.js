import NavbarDashboard from "../UI/NavbarDashboard";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Film = () => {

  const {id}=useParams()
  const navigate = useNavigate();
  const [movie,setMovie]=useState({})

  const [date,setDate]=useState("")

  const [movies,setMovies]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/cinema/getOneDetails/${id}`,{
      headers:{
        //eslint-disable-next-line
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODYyMzcyNzAsImV4cCI6MTY4NjI0MDg3MH0.FwNDgf8fgBLEyfY0tvtESJ63a2zcDKJZcCFI18SF8U0',
      },
    }).then(res=>res.json()).then(data=>setMovie(data))
  },[id])

  console.log(movies)

  const getMoviesByDate=()=>{
    if(date!=="") {
      fetch(`http://localhost:3000/cinema/getMovieScreeningByDate/${date}`, {
        headers: {
          //eslint-disable-next-line
          'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODYyMzcyNzAsImV4cCI6MTY4NjI0MDg3MH0.FwNDgf8fgBLEyfY0tvtESJ63a2zcDKJZcCFI18SF8U0",
        },
      }).then(res => res.json()).then(data => {
        setMovies(data);
      })
    }
  }

console.log(date);

  if(!movie.title) return;

  return (

    <div className="min-h-screen h-full">
      <NavbarDashboard></NavbarDashboard>
      <div >
        <section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto bg-dark-purple  w-full">
              <div className="p-5 flex items-center mx-auto border-b mb-10 border-purple border-2 rounded-lg sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-64 w-64 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                  <img alt={"Błąd ładowania"} src={movie?.images[0]} />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 className="text-purple text-5xl title-font font-bold mb-2">
                    {movie?.title}
                  </h1>
                  <h1 className="text-purple text-2xl title-font font-bold mb-2">
                    Opis
                  </h1>
                  <p className="leading-relaxed text-base">
                    {movie?.description}
                  </p>
                  <div className="py-4">
                    
                  </div>
                  <div className="md:flex font-bold ">
                    <div className="w-full md:w-1/2 flex space-x-3">
                      <div className="w-1/2">
                        <h2 className="text-purple">Data premiery:</h2>
                        <p>{movie?.premiere}</p>
                      </div>
                      <div className="w-1/2">
                        <h2 className="text-purple">Koniec emisji</h2>
                        <p>{movie?.end}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex space-x-3">
                      <div className="w-1/2">
                        <h2 className="text-purple">Ocena użytkowników</h2>
                        <p>{movie?.opinion.reduce((acc,cval)=>acc+cval.rate,0)/movie?.opinion.length||"Brak opinii"}</p>
                      </div>
                      <div className="w-1/2">
                        <h2 className="text-purple">Kino</h2>
                        <p>{movie.cinemaAdmin.cinemaName}</p>
                      </div>
                    </div>
                  </div>




                </div>

              </div>
              <div className=" grid justify-items-center space-y-4 my-4 mx-4">
                <p className="text-2xl mb-2"> Wybierz date</p>
                <input
                    type="date"
                    placeholder="Price"
                    className="input input-bordered border-purple max-w-xs"
                    onChange={(e)=>setDate(e.target.value)}
                />
                <button onClick={()=>getMoviesByDate()}
                        className="btn text-main-dark border-2 border-success max-w-xs justify-center">
                  Sprawdź date
                </button>
                <div className={' w-full'}>
                {movies?movies.map(m=><div key={m.date} className={'border-b flex flex-wrap justify-between p-5 w-full mb-10 border-purple border-2 rounded-lg'}>
                  <img alt={"Błąd ładowania"} className={'h-16'} src={m.movie.images[0]} />
                  <span className={'text-purple font-bold text-2xl'}>{m.movie.title}</span>
                  <span className={''}>{m.movie.description}</span>
                  <span className={'text-2xl'}>{m.date.split(" ")[1]}</span>
                  <span className="btn mt-3 inline-flex items-center" onClick={()=>navigate(`/chooseSeat/${m.id}`)}>
                    Zarezerwuj bilet
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>):null}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Film;
