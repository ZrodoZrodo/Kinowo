export const Seat =({color,setMarked,id})=>{

    const addId=(id)=>{
        if(setMarked) {
            setMarked(prev => prev.includes(id)? prev.filter(x=>x!==id):[...prev, id])
        }
    }

    return(
        <svg onClick={()=>addId(id)} width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C0 2.89543 0.89543 2 2 2H4C5.10457 2 6 2.89543 6 4V14C6 15.1046 6.89543 16 8 16H22C23.1046 16 24 15.1046 24 14V4C24 2.89543 24.8954 2 26 2H28C29.1046 2 30 2.89543 30 4V17C30 19.7614 27.7614 22 25 22H5C2.23858 22 0 19.7614 0 17V4Z" fill={color}/>
            <path d="M7 3C7 1.34315 8.34315 0 10 0H20C21.6569 0 23 1.34315 23 3V14C23 14.5523 22.5523 15 22 15H8C7.44772 15 7 14.5523 7 14V3Z" fill={color}/>
        </svg>

    )
}