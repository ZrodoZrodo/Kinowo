import {useNavigate} from "react-router-dom";

const Searchinput = () => {
  const navigate = useNavigate();
  return (
    <input
      type="text"
      placeholder="Wyszukaj kino albo film"
      class="input input-bordered w-1/3 pr-16"
      onKeyDown={e=>e.key==='Enter'&&navigate(`/allmovies/${e.target.value===""?"default":e.target.value}`)}
    />
  );
};

export default Searchinput;
