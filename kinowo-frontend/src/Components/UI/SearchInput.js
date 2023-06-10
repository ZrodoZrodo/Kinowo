const Searchinput = () => {
  return (
    <input
      type="text"
      placeholder="Wyszukaj kino albo film"
      class="input input-bordered w-1/3 pr-16"
      onKeyDown={e=>e.key==='Enter'&&console.log(e.target.value)}
    />
  );
};

export default Searchinput;
