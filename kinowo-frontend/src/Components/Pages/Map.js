import { Link } from "react-router-dom";
import Number from "../UI/Number";

const Map = () => {
  return (
    <div className="w-full h-fit" id="lokalizacja">
      <div className="flex">
        <p className=" text-white  m-8 text-6xl">
          Miejsca <br />
          pod naszą <br />
          opieką
        </p>
      </div>
      <p className="m-8 w-1/3 text-white">
        {" "}
        W celu ułatwienia wyszukiwania naszych kin, na tej stronie znajdziesz
        listę miejsc, w których działają nasze kina. Dzięki temu będziesz mógł
        szybko i łatwo znaleźć kino w Twojej okolicy i wybrać seans, który
        najbardziej Ci odpowiada.
      </p>
      <div className=" flex flex-nowrap max-[840px]:flex-wrap md:mx-6">
        <div className="w-full max-[400px]:mt-8 mt-4 mb-4 lg:w-7/12 ">
          <div class="mapouter ">
            <div class="gmap_canvas">
              <iframe
                className=" w-full border-lg border-2 border-dark-red"
                title="mpa"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Częstchowa wolności kino&t=&z=16&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                height="573"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-nowrap mt-4 ml-8">
            <Number>01</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 sm:text-thin">
              Cinema City Wolności
            </p>
          </div>
          <div className="flex flex-nowrap mt-4 ml-8">
            <Number>02</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 ">
              Cinema City Galeria Jurajska
            </p>
          </div>
          <div className="flex flex-nowrap mt-4 ml-8">
            <Number>03</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 ">
              Cinema City Poznań
            </p>
          </div>
          <div className="flex flex-nowrap my-4 ml-8">
            <Number>04</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4">
              Cinema City Warszawa
            </p>
          </div>
          <div className="flex flex-nowrap my-4 ml-8">
            <Number>05</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4">
              Stanowiska sponsorów
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-items-center mt-36">
        <div className=" border-2 border-l-transparent border-r-transparent border-t-transparent border-dark-red rounded-null w-1/2 mb-24 "></div>
        <p className="text-5xl text-white text-center font-extrabold mb-24">
          Zacznij oglądać swoje <br /> ulubione filmy z nami{" "}
        </p>
        <p className="text-2xl text-center">
          Przygotuj się na niezapomnianą podróż,<br></br>Pełną emocji i
          wyjątkowych wrażeń,<br></br>Zapraszamy Cię, byś zaczął oglądać swoje
          ulubione filmy z nami,<br></br>I pozwolił nam nauczyć Cię, jak żyć
          pełnią życia.
        </p>
        <Link to="/register">
          <button class="btn btn-wide mt-24 mb-36" id="zaczynajmy">
            Rejestracja
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Map;
