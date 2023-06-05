import {Seat} from "./Seat";


export const SeatColumn=({column,marked,setMarked,disabled})=>{

    return(
        <div className={"grid gap-8  place-items-center"}>
            {column.map(row=><div className={'flex space-x-2'}>{row.map(seat=><div className={"space-x-2"}><Seat setMarked={disabled.includes(seat)?()=>null:setMarked} color={disabled.includes(seat)?'#2A123D':marked.includes(seat)?'#FFFFFF':'#55257D'} id={seat}/></div>)}</div>)}
        </div>
    )
}