import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import intru from "../../UI/Posters/tech-daily-NXAQF0bF1Y8-unsplash.jpg";
import top from "../../UI/Posters/samuel-regan-asante-Geepgu8bCas-unsplash.jpg";

const CinemaMovies=()=>{

    const {id}=useParams()
    const [cookie]=useCookies()
    const navigate = useNavigate();
    const [movies,setMovies]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/admin/getCinemaMovies/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + cookie.Token,
            }
        }).then(res => res.json()).then(data => setMovies(data.movies))
    },[])

    console.log(movies)

    const deleteMovie=(oid)=>{
        console.log(id)
        fetch(`http://localhost:3000/admin/deleteCinemaMovie/${oid}`, {
            headers: {
                'Authorization': 'Bearer ' + cookie.Token,
            },
            method:"DELETE",
            body:JSON.stringify({id:id})
        }).then(()=>{
            fetch(`http://localhost:3000/admin/getCinemaMovies/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + cookie.Token,
                }
            }).then(res => res.json()).then(data => setMovies(data.movies))
        })
    }

    const undeleteMovie=(oid)=>{
        fetch(`http://localhost:3000/admin/undeleteCinemaMovie/${oid}`, {
            headers: {
                'Authorization': 'Bearer ' + cookie.Token,
            },
        }).then(()=>{
            fetch(`http://localhost:3000/admin/getCinemaMovies/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + cookie.Token,
                }
            }).then(res => res.json()).then(data => setMovies(data.movies))
        })

    }


    if(!movies) return;
    return(
        <div className={'h-full  overflow-x-auto w-full min-h-screen'}>
            <div className="drawer-content flex flex-col">
                <div
                    className="w-full navbar border-2 border-l-transparent border-r-transparent border-t-transparent border-b-purple rounded-null ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
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

                    <p onClick={() => navigate('/admindashboard')}
                       className="cursor-pointer flex-1 px-2 mx-2 normal-case sm:text-4xl tracking-widest text-left pl-8">
                        {" "}
                        KINOWO
                    </p>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li onClick={() => navigate("/userlist")}>
                                <a>Lista użytkowników</a>
                            </li>
                            <li onClick={() => navigate("/cinemalist")}>
                                <a>Lista kin</a>
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
                                </div>
                                {" "}
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
            <table className={"table w-full overflow-x-auto"}>
                <thead className="text-center  text-white">
                <tr>
                    <th>Zdjęcie</th>
                    <th>Tytuł</th>
                    <th>Opis</th>
                    <th>Przycisk akcji</th>

                </tr>
                </thead>
                {movies.map(movie=>
                    <tr className="text-center">
                        <td className="underline  decoration-purple decoration-2 text-2xl text-white ">
                           <img src={movie.images[0]} alt={"Błąd wczytywania"} className={'w-32 object-fill'}/>
                        </td>
                        <td className="underline  decoration-purple decoration-2 text-2xl text-white ">
                            {movie.title}
                        </td>
                        <td className="underline  decoration-purple  decoration-2 text-2xl text-white">
                            {movie.description}

                        </td>
                        <td>
                            {movie.deleted?<button onClick={()=>undeleteMovie(movie.id)} className={'btn btn-success'}>Przywróć</button>:<button onClick={()=>deleteMovie(movie.id)} className={'btn btn-error'}>Usuń</button>}
                        </td>
                    </tr>
                )}


            </table>
        </div>
    )
}

export default CinemaMovies;