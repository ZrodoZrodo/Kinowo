import Footer from "../../UI/Footer";
import NavbarDashboard from "../../UI/NavbarDashboard";
import Movie from "./Movie";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useParams} from "react-router-dom";

const AllMovies = () => {

    const [cookie]=useCookies()
    const {title}=useParams()
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        if(title==="default")
        {
            fetch(`http://localhost:3000/cinema/getUserMovies/`, {
                headers: {
                    'Authorization': 'Bearer ' + cookie.Token,
                }
            }).then(res => res.json()).then(data => setMovies(data))
        }
        else{
            fetch(`http://localhost:3000/cinema/getOne/${title}`, {
                headers: {
                    'Authorization': 'Bearer ' + cookie.Token,
                }
            }).then(res => res.json()).then(data => setMovies(data))
        }
    },[title])

  return (
    <div className="bg-dark-purple min-h-screen h-full w-full">
      <NavbarDashboard></NavbarDashboard>
      <div className="flex flex-wrap m-8">
        <div className="">
          <p className="text-white sm:text-6xl text-2xl underline underline-offset-2 decoration-purple decoration-2">
            {" "}
            Wszystkie filmy które gramy.{" "}
          </p>
        </div>
      </div>
      <div className=" grid justify-items-center  w-full  "></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 py-4  bg-dark-purple ">
          {movies.map(movie=><Movie data={movie}/>)}

      
      </div>
  
    </div>
  );
};

export default AllMovies;
