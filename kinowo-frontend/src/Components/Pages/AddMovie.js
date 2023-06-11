import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";
import {useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [data,setData]=useState({})
  const [cookie]=useCookies()
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

  const send=(e)=>{

e.preventDefault()
    const photos=photosUrls.map(photo=>photo.photoBlob)
    const formData=new FormData();
    photos.forEach(photo=>{
      formData.append('files',photo)
    })

    formData.append('end',data.end)
    formData.append('premiere',data.premiere)
    formData.append('description',data.description)
    formData.append('title',data.title)
    formData.append('id',cookie.UserData.id)

    fetch('http://localhost:3000/cinema/upload',{
      method: "POST",
      body:formData
    }).then(res=>res.json()).then(data=>console.log(data)).then(()=>navigate('/cienmaadminnowonscreen'))

  }

  return (
    <div className="card w-full">
      <NavbarDashboard></NavbarDashboard>
      <form>
        <div class="flex flex-col space-y-4 card-body">
          <h2 class=" text-white text-center text-3xl underline  decoration-purple underline-offset-8">
            Dodawanie nowego filmu!
          </h2>
          <div className=" text-center text-main-red ">
            Tutaj możesz dodać kolejny film do repertuaru
          </div>
          <div className="flex flex-col items-center text-white space-y-6">
            <p className="text-2xl"> Nazwa filmu:</p>
            <input
              type="text"
              name="title"
              placeholder="Nazwa filmu"
              className="input input-bordered border-purple max-w-xs"
              value={data.title}
              onChange={(e)=>setData({...data,title:e.target.value})}
            />
            <hr className="border-purple w-4/5" />
            <p className="text-2xl"> Opis filmu:</p>
            <textarea
              type="text"
              rows="8"
              cols="100"
              placeholder="Opis"
              className="rounded-md caret-transparent bg-[#171017] border-2 border-purple resize-none text-left w-11/12 md:w-1/2"
              onChange={(e)=>setData({...data,description:e.target.value})}
              value={data.description}
            />
            <hr className="border-purple w-4/5" />
            <div className="flex flex-wrap justify-center">
              <div className=" grid justify-items-center my-4 mx-4">
                <p className="text-2xl mb-2"> Premiera:</p>
                <input
                  type="date"
                  min="1"
                  className="input input-bordered border-purple max-w-xs"
                  value={data.premiere}
                  onChange={(e)=>setData({...data,premiere:e.target.value})}
                />
              </div>
              <div className=" grid justify-items-center my-4 mx-4">
                <p className="text-2xl mb-2"> Data końca emisji filmu:</p>
                <input
                  type="date"
                  placeholder="Price"
                  className="input input-bordered border-purple max-w-xs"
                  value={data.end}
                  onChange={(e)=>setData({...data,end:e.target.value})}
                />
              </div>

            </div>
            <hr className="border-purple w-full" />

              <div className={"rounded-md caret-transparent bg-[#171017] h-48 border-2 border-purple resize-none text-left w-11/12 md:w-1/2"}>
                <input multiple className={"w-full h-full opacity-0"} onChange={(e)=>addPhoto(e)} type={'file'}/>
              </div>
              <div className={'w-full h-32 bg-[#171017] overflow-auto '}>
                <div className={'flex  justify-center items-center'}>
                  {photosUrls.map(photo=><img alt={"error"} key={photo.url} onClick={()=>deletePhoto(photo)} className={'object-fill h-32 w-32'} src={photo.url}/>)}
                </div>
            </div>
            <div className="grid justify-items-center gap-7 ">
            <button onClick={(e)=>send(e)} class="btn btn-success text-main-dark border-2 border-success max-w-xs justify-center">
                Dodaj film
              </button>
              <p onClick={()=>navigate('/cienmaadminnowonscreen')} className="btn btn-outline text-white">Wróc do listy filmów</p>
              
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddMovie;
