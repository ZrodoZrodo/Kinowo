import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";
const film = { name: "Black panther" };

const AddOpinion = () => {
  return (
    <div className="h-screen bg-dark-purple">
      <NavbarDashboard></NavbarDashboard>
      <div className="h-full w-full flex justify-center -mt-10 bg-dark-purple">
        <div className="h-1/2 border-2 w-4/5 flex justify-center rounded-md border-purple self-center">
          <div className="flex w-1/3 h-full bg-[#171017]">
            <p className="text-center p-4 self-center text-white">
              <p className="text-3xl mt-4">
                Dziękujemy za obejrzenie tego filmu na naszym ekranie!
              </p>
              <p className="mt-6">
                Chcielibyśmy poznać Twoją opinię na jego temat. Prosimy o
                wypełnienie poniższego formularza, aby podzielić się swoimi
                spostrzeżeniami.
                <br />
                <p className="mt-4">Jeśli się rozmyśliłeś kliknij przycisk wróć do filmów!</p>
              </p>
              <p className="btn mt-2">Wróc do filmów</p>
            </p>
          </div>
          <form className="border-1 border-purple w-full text-center flex flex-col ">
            <p className=" mt-6 text-4xl">Oceniasz film : {film.name} </p>
            <p className=" mt-5">Twoja ocena (W przedziale od 1 do 5)</p>
            <div class="rating rating-lg mt-4 self-center ">
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-purple"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-purple"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-purple"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-purple"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-purple"
              />
            </div>
            <textarea
              type="text"
              rows="8"
              cols="100"
              placeholder="Twoja opinia"
              className="rounded-md caret-transparent bg-[#171017] border-2 border-purple resize-none self-center text-left w-11/12 md:w-1/2 mt-6 "
            />
            <button className="btn mt-4 w-1/2 self-center">Dodaj opinię</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOpinion;
