import {useParams} from "react-router-dom";
import Navbar from "../MainPage/Navbar";
import {SeatColumn} from "./SeatColumn";
import {Seat} from "./Seat";
import Button from "../../UI/Button";
import Demo from './seatDemo'
import {useState} from "react";


export const ChooseSeat =()=>{

    const {id}=useParams()
    console.log(Demo)
    const [disabled,setDisabled]=useState([1,4,7,3])
    const [marked,setMarked]=useState([])

    if(!disabled) return;

    console.log(marked)

    return (
        <div className={"w-screen h-screen bg-dark-purple flex justify-between"}>
            <div className={'w-1/6'}></div>
            <div className={"grid gap-8 place-items-center w-4/6 h-fit"}>
                <span className={'h-fit ChooseHeader font-semibold justify-center'}>Wybierz miejsce</span>
                    <span className={'Line'}> </span>
                <svg width="787" height="85" viewBox="0 0 787 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_466_265)">
                        <path d="M5 75.7776C322.741 -24.1127 492.95 -23.7389 782 75.7776" stroke="#55257D" stroke-width="2" stroke-linecap="round"/>


                    </g>
                    <defs>
                        <filter id="filter0_d_466_265" x="-0.000488281" y="0" width="787" height="84.7778" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.145098 0 0 0 0 0.490196 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_466_265"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_466_265" result="shape"/>
                        </filter>
                    </defs>
                    <text x="363" y="40" fontSize={23} fill="#55257D">Ekran</text>
                </svg>

            <div className={'flex  space-x-12'}>
                {Demo.map(col=><div className={"border-x-4 p-5 border-x-purple"}><SeatColumn disabled={disabled} marked={marked} setMarked={setMarked} column={col}/></div> )}
            </div>
                <div
                    className="border-2 px-9 mt-8 shadow-3xl border-purple rounded-lg px-3 py-2 cursor-pointer">
                    Kup bilet
                </div>
            </div>
            <div className={"grid gap-16 w-1/6 place-items-center h-fit"}>
                <span className={'mt-10 Legend'}>Legenda</span>
                <div className={'grid place-items-center'}>
                    <span>Wolne</span>
                    <Seat color={'#55257D'}/>
                </div>
                <div className={'grid place-items-center'}>
                    <span>Zajęte</span>
                    <Seat color={'#2A123D'}/>
                </div>
                <div className={'grid place-items-center'}>
                    <span>Zaznaczone</span>
                    <Seat color={'#FFFFFF'}/>
                </div>
            </div>
        </div>
    )
}
