import Footer from "../../UI/Footer";
import NavbarDashboard from "../../UI/NavbarDashboard";

import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const History = (props) => {
  const navigate = useNavigate();
  const [movies,setMovies]=useState([])
const [cookie]=useCookies()
  useEffect(()=>{
    fetch(`http://localhost:3000/user/getMoviesHistory/${cookie.UserData.id}`,{
      headers:{
        'Authorization': 'Bearer ' + cookie.Token,
      }
    }).then(res=>res.json()).then(data=>setMovies(data))
  },[])

  console.log(movies)
  if(!movies.reservations) return;

  return (
    <div className="bg-dark-purple h-screen w-full">
      <div className="bg-dark-purple h-full w-full">
        <NavbarDashboard></NavbarDashboard>
        <div className="flex flex-wrap m-8">
          <div className="">
            <p className="text-white sm:text-6xl text-2xl underline underline-offset-2 decoration-purple decoration-2">
              {" "}
              Historia.{" "}
            </p>

            <p className="text-white sm:text-center md:text-left  sm:w-1/3 w-full mt-6">
              Historia to miejsce, gdzie możesz śledzić swoją filmową podróż.
              Przez przeglądanie tej sekcji możesz przypomnieć sobie filmy,
              które już oglądałeś i odkryć nowe tytuły, które warto jeszcze raz
              obejrzeć.
            </p>
          </div>
        </div>
        <div className=" grid justify-items-center  w-full  ">
          <div className="border-2 border-l-transparent border-r-transparent border-t-purple border-b-transparent rounded-null w-1/2"></div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 my-4 "></div>
        <div className={'overflow-x-auto w-full'}>
          <table className={'table  w-full overflow-x-auto'}>
            <thead>
            <tr>
              <th>Tytuł</th>
              <th>Data</th>
              <th>cena</th>
              <th>Numery siedzeń</th>
              <th></th>
            </tr>
            </thead>
          {movies.reservations.map(m =>
              <tr>
            <td>{m.title}</td> <td>{m.date}</td> <td>{m.price} zł</td> <td>{m.seatNumber.map(x=><span> {x}</span>)}</td> <td><button onClick={()=>navigate(`/addopinion/${m.movieId}`)} className={'btn '}>Dodaj opinie</button></td>
            </tr>
          )}
          </table>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default History;
