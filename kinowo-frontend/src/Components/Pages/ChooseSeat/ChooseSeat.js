import {useParams} from "react-router-dom";
import Navbar from "../MainPage/Navabar";


export const ChooseSeat =()=>{

    const {id}=useParams()

    return (
        <div className={"w-screen h-screen bg-dark-purple flex-row"}>
            <Navbar/>
        </div>
    )
}
