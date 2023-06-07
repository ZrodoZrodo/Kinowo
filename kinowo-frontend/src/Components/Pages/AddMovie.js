import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";

const AddMovie = () => {
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
            />
            <hr className="border-purple w-4/5" />
            <p className="text-2xl"> Opis filmu:</p>
            <textarea
              type="text"
              rows="8"
              cols="100"
              placeholder="Opis"
              className="rounded-md caret-transparent bg-[#171017] border-2 border-purple resize-none text-left w-11/12 md:w-1/2"
            />
            <hr className="border-purple w-4/5" />
            <div className="flex flex-wrap ">
              <div className=" grid justify-items-center my-4 mx-4">
                <p className="text-2xl mb-2"> Premiera:</p>
                <input
                  type="date"
                  min="1"
                  className="input input-bordered border-purple max-w-xs"
                />
              </div>
              <div className=" grid justify-items-center my-4 mx-4">
                <p className="text-2xl mb-2"> Data końca emisji filmu:</p>
                <input
                  type="date"
                  placeholder="Price"
                  className="input input-bordered border-purple max-w-xs"
                />
              </div>
            </div>
            <div className="grid justify-items-center gap-7 ">
            <button class="btn btn-success text-main-dark border-2 border-success max-w-xs justify-center">
                Dodaj film
              </button>
              <p className="btn btn-outline text-white">Wróc do listy filmów</p>
              
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddMovie;
