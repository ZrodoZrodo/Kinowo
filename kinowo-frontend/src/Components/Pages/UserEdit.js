import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";

const UserEdit = () => {
  return (
    <div class="card bg-main-dark w-full rounded-none shadow-xl h-screen ">
      <NavbarDashboard></NavbarDashboard>
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline decoration-2 underline-offset-8 decoration-purple">
          Cześć!
        </h2>
        <div className=" text-center text-white">
          Tutaj możesz zmienić informacje o sobie.
        </div>
        <div>
          <hr className="border-purple" />
        </div>
        <form>
          <div className="grid grid-cols-2 gap-4 text-center ">
            <div className="flex flex-col space-y-2">
              <p>Imie</p>
              <p className="text-white text-2xl">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Imie"
                  className="input input-bordered border-purple w-full input-info max-w-xs"
                />
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Naziwsko </p>
              <p className="text-white text-2xl">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Naziwsko"
                  className="input input-bordered border-purple w-full input-info max-w-xs"
                />{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Numer telefonu</p>
              <p className="text-white text-2xl">
                <input
                  name="number"
                  type="tel"
                  placeholder="Numer telefonu"
                  pattern="[0-9]{9}"
                  className="input input-bordered border-purple w-full input-info max-w-xs"
                />
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Adres email </p>
              <p className="text-white text-2xl">
                <input
                  name="email"
                  type="text"
                  placeholder="Adres email"
                  className="input input-bordered border-purple input-info w-full max-w-xs"
                />
              </p>
            </div>
            <div className="col-span-2 flex flex-col space-y-2 w-1/2 ">
              <div className="justify-center border-2 border-l-transparent border-r-purple h-24 border-r-transparent border-t-transparent border-b-transparent rounded-none mb-8"></div>
            </div>
          </div>
          <div class=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a class="btn bg-outline border-purple text-dark-blue  border-2">
             Wróc do panelu głównego
            </a>
            <button class="btn btn-success text-main-dark border-2 border-success">
              Zapisz zmiany
            </button>
          </div>
        </form>
        <hr className="border-purple " />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UserEdit;
