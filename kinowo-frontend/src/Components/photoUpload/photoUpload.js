import {useState} from "react";
import Button from "../UI/Button";

export const PhotoUpload=()=>{

    const [photosUrls,setPhotosUrls]=useState([])

    const addPhoto=(e)=>{
        e.preventDefault()
        for(let i=0;i<e.target.files.length;i++)
        {
            const photoBlob=e.target.files[i]
            const url=URL.createObjectURL(e.target.files[i])
            setPhotosUrls(prevState => [...prevState,{url,photoBlob}]);

        }
        e.target.value=""
    }

    const deletePhoto=(photo)=>{
        setPhotosUrls(prevState => prevState.filter(url=>url!==photo))
    }

    const sendTest=()=>{

        const photos=photosUrls.map(photo=>photo.photoBlob)
        console.log(photos)
        const formData=new FormData();
        photos.forEach(photo=>{
            formData.append('files',photo)
        })

        formData.append('end',"21/11/11131")
        formData.append('premiere',"11/11/1111")
        formData.append('description',"fajny fisfsdlmy ogółem")
        formData.append('title',"tessdffdst")
        formData.append('id',"647e3cf8c696b7a714a9644a")

    console.log(formData)

        fetch('http://localhost:3000/cinema/upload',{
            method: "POST",
            body:formData
        })
    }

    console.log(photosUrls)
    return(
        <div>
            <div className={"w-60 h-60 bg-red border-x-purple"}>
                <input multiple className={"w-full h-full opacity-0"} onChange={(e)=>addPhoto(e)} type={'file'}/>
            </div>
            <div className={'w-screen overflow-auto'}>
            <div className={'flex h-32 w-32'}>
                {photosUrls.map(photo=><img onClick={()=>deletePhoto(photo)} className={'object-fill'} src={photo.url}/>)}
            </div>
            </div>
            <button  onClick={()=>sendTest()}>chuj </button>
        </div>
    )
}