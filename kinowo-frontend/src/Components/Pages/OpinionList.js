
import NavbarDashboard from "../UI/NavbarDashboard";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const filmy = {
  nazwa: "Jaś i Małgosia",
  opis: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker",
  ocena: "4",
};

const OpinionList = () => {

  const [cookie]=useCookies()

  const [opinions,setOpinions]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/user/getUserOpinions/${cookie.UserData.id}`,{headers:{
        'Authorization': 'Bearer ' + cookie.Token,
      }}).then(res=>res.json()).then(data=>setOpinions(data.opinions))
  },[])

  console.log(opinions)

  return (
    <div className="min-h-screen h-full">
      <NavbarDashboard></NavbarDashboard>
      <div className="flex flex-wrap m-8">
        <div className="">
          <p className="text-white sm:text-6xl text-2xl underline underline-offset-2 decoration-purple decoration-2">
            {" "}
            Lista opinii.{" "}
          </p>

          <p className="text-white sm:text-center md:text-left  sm:w-1/3 w-full mt-6">
            To co teraz widzisz to jest lista twoich opinii. Tutaj znajdują się
            wszystkie opinie które wystawiłeś w naszym serwisie.
          </p>
        </div>
      </div>
      <div className=" grid justify-items-center w-full  ">
        <div className="border-2 border-l-transparent border-r-transparent border-t-purple border-b-transparent rounded-null w-1/2"></div>
        <div className="sm:w-3/4  mt-2 p-5 ">
          <table className="w-full">
            <thead className=" sm:text-3xl text-white underline underline-offset-2 decoration-purple decoration-2 text-center">
              <th>Tytuł</th>
              <th>Opinia</th>
              <th>Ocena</th>
            </thead>
            <tbody className="text-white text-center p-4 ">
            {opinions.map(opinion=>
                <tr className="mb-2">
                  <td className="border-2 border-l-purple border-r-purple border-t-transparent border-b-purple rounded-null">
                    {opinion.movieTitle}
                  </td>
                  <td className="border-2 border-l-transparent border-r-purple border-t-transparent border-b-purple rounded-null">
                    {opinion.description}
                  </td>
                  <td className="text-3xl border-2 border-l-transparent border-r-purple border-t-transparent border-b-purple rounded-null">
                    {opinion.rate}
                    <div className="rating rating-md">
                      <input
                          type="radio"
                          name="rating-8"
                          className="mask mask-star-2 bg-purple"
                      />
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="border-2 border-l-transparent border-r-transparent border-t-purple border-b-transparent rounded-null w-1/2"></div>
      </div>
    </div>
  );
};

export default OpinionList;
