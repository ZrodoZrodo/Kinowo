
import {useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate, useParams} from "react-router-dom";

const AddScreening = () => {
    const navigate = useNavigate();
    const [data,setData]=useState({})
    const [cookie]=useCookies()

    const {id,title,description}=useParams()



    const send=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/cinema/putMoviesIntoScreening`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + cookie.Token,
            },

            body: JSON.stringify({
                movieId:id,
                price:Number(data.price).toFixed(2),
                date:data.date+" "+data.hour,
                end:false,
                cinemaAdminId:cookie.UserData.id
            }),
        }).then(res=>res.json()).then(data=>data.date&&navigate('/cienmaadminnowonscreen'));
    }

    return (
        <div className="card min-h-screen h-full w-full">
            <form>
                <div class="flex flex-col space-y-4 card-body">
                    <h2 class=" text-white text-center text-3xl underline  decoration-purple underline-offset-8">
                        Dodawanie nowego filmu!
                    </h2>
                    <div className=" text-center text-main-red ">
                        Tutaj możesz dodać kolejny film do repertuaru
                    </div>
                    <div className="flex flex-col items-center text-white space-y-6">
                        <p className="text-2xl"> Nazwa filmu:<br/>{title}</p>

                        <hr className="border-purple w-4/5" />
                        <p className="text-2xl"> Opis filmu:<br/></p>
                        {description}
                        <hr className="border-purple w-4/5" />
                        <div className="flex flex-wrap justify-center">
                            <div className=" grid space-y-3 justify-items-center my-4 mx-4">
                                <p className="text-2xl mb-2"> Podaj datę:</p>
                                <input
                                    type="date"
                                    min="1"
                                    className="input input-bordered border-purple max-w-xs"
                                    value={data.date}
                                    onChange={(e)=>setData({...data,date:e.target.value})}
                                />
                                <p className="text-2xl mb-2"> Podaj godzinę:</p>
                                <input
                                    type="text"

                                    className="input input-bordered border-purple max-w-xs"
                                    value={data.hour}
                                    onChange={(e)=>setData({...data,hour:e.target.value})}
                                />
                                <p className="text-2xl mb-2"> Podaj cene:</p>
                                <input
                                    type="number"
                                    step={0.01}
                                    className="input input-bordered border-purple max-w-xs"
                                    value={data.price}
                                    onChange={(e)=>setData({...data,price:e.target.value})}
                                />
                            </div>

                        </div>
                        <hr className="border-purple w-full" />

                        <div className="grid justify-items-center gap-7 ">
                            <button onClick={(e)=>send(e)} class="btn btn-success text-main-dark border-2 border-success max-w-xs justify-center">
                                Dodaj film
                            </button>
                            <p onClick={()=>navigate('/cienmaadminnowonscreen')} className="btn btn-outline text-white">Wróc do listy filmów</p>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddScreening;
