import poster1 from "../../UI/Posters/BlackPanther.png";
import {useNavigate} from "react-router-dom";

const Movie = ({data}) => {
  const navigate = useNavigate();
  return (
    <div class="card w-96 bg-[#171017] shadow-xl rounded-xl">
  <figure class="px-10 pt-10">
    <img src={data.images.length>0&&data.images[0]} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-[#5b18c2] ">{data.title}</h2>
    <p>Wyświetl dodatkowe informacje na temat filmu </p>
    <div class="card-actions">
      <button onClick={()=>navigate(`/booking/${data.id}`)} class="btn border-2 border-purple">informacje</button>
    </div>
  </div>
</div>
  );
};

export default Movie;
