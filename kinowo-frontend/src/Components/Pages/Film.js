import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";
import poster1 from "../UI/Posters/BlackPanther.png";

const Film = () => {
  return (
    <div className="h-screen">
      <NavbarDashboard></NavbarDashboard>
      <div >
        <section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto bg-dark-purple  w-full">
              <div className="p-5 flex items-center mx-auto border-b mb-10 border-purple border-2 rounded-lg sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-64 w-64 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                  <img src={poster1} />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 className="text-purple text-5xl title-font font-bold mb-2">
                  Black Panther
                  </h1>
                  <h1 className="text-purple text-2xl title-font font-bold mb-2">
                    Opis
                  </h1>
                  <p className="leading-relaxed text-base">
                    "Black Panther" to film akcji i science fiction z 2018 roku,
                    który został wyreżyserowany przez Ryana Cooglera. Fabuła
                    filmu skupia się na losach tytułowego bohatera, T'Challi
                    (Chadwick Boseman), który zostaje koronowany na króla
                    Wakandy - fikcyjnego państwa afrykańskiego, którego
                    mieszkańcy dysponują technologią znacznie bardziej
                    zaawansowaną niż pozostałe państwa na świecie. T'Challa jest
                    nie tylko królem, ale również tytułowym superbohaterem Black
                    Panther, który posiada niezwykłe umiejętności i zdolności
                    fizyczne, umożliwiające mu walkę z największymi
                    zagrożeniami. Kiedy jego władzę zaczyna jednak zagrożenie ze
                    strony przeciwnika, Erik Killmongera (Michael B. Jordan),
                    T'Challa musi wykorzystać wszystkie swoje umiejętności i
                    wiedzę, by obronić Wakandę i swoich poddanych.
                  </p>
                  <div className="py-4">
                    
                  </div>
                  <div className="md:flex font-bold ">
                    <div className="w-full md:w-1/2 flex space-x-3">
                      <div className="w-1/2">
                        <h2 className="text-purple">Data premiery:</h2>
                        <p>20.02.2020</p>
                      </div>
                      <div className="w-1/2">
                        <h2 className="text-purple">Czas trwania:</h2>
                        <p>120 minut</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex space-x-3">
                      <div className="w-1/2">
                        <h2 className="text-purple">Typ:</h2>
                        <p>Akcja</p>
                      </div>
                      <div className="w-1/2">
                        <h2 className="text-purple">Reżyser:</h2>
                        <p>Akcja</p>
                      </div>
                    </div>
                  </div>
                  <a class="btn mt-3 inline-flex items-center">
                    Zarezerwuj bilet
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Film;
