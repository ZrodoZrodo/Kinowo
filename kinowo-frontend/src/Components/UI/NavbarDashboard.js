import Number from "./Number";
import Searchinput from "./SearchInput";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const NavbarDashboard = (props) => {

  const navigate = useNavigate();
  return (
    <div className="navbar bg-dark-purple">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact Burger dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <li>
              <p onClick={()=>navigate('/allmovies')}>
                Rezerwuj bilet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.88161 18.4049L13.4975 4.91031C13.5731 4.62789 13.4055 4.33759 13.1231 4.26191L7.38438 2.72423C7.10195 2.64855 6.81166 2.81615 6.73598 3.09858L3.12013 16.5931C2.61983 18.4603 3.72787 20.3794 5.595 20.8797C7.46213 21.38 9.38131 20.272 9.88161 18.4049Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5 20.9999L20.4706 20.9999C20.763 20.9999 21 20.7629 21 20.4705V14.5293"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5 17.6H6.502V17.602H6.5V17.6Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.97998 20.6713L20.6416 14.7671C20.9066 14.6435 21.0213 14.3285 20.8977 14.0635L18.3869 8.67897C18.2633 8.41398 17.9483 8.29933 17.6833 8.4229L12.03 11.0591"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </li>
            <li>
              <p onClick={()=>navigate('/history')}>
                Historia{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 8H5V3"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.29053 16.3571C6.22236 17.792 7.58966 18.8904 9.19169 19.4909C10.7937 20.0915 12.5461 20.1627 14.1916 19.6939C15.837 19.2252 17.2889 18.2413 18.3339 16.8867C19.379 15.5321 19.9623 13.8781 19.9981 12.1675C20.034 10.457 19.5205 8.78004 18.533 7.38284C17.5456 5.98564 16.1362 4.94181 14.5118 4.4046C12.8874 3.86738 11.1336 3.86509 9.50784 4.39805C7.88206 4.93101 6.46997 5.97114 5.47887 7.36575"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </li>
            <li>
              <p>
                Oceny
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.986 8.47434L12.4538 2.98442C12.2751 2.59699 11.7244 2.59699 11.5457 2.98442L9.01347 8.47434C8.94064 8.63224 8.791 8.74096 8.61831 8.76144L2.61459 9.47327C2.19089 9.52351 2.02073 10.0472 2.33398 10.3369L6.77269 14.4417C6.90036 14.5597 6.95752 14.7357 6.92363 14.9062L5.74537 20.8361C5.66222 21.2545 6.1077 21.5782 6.48001 21.3698L11.7555 18.4168C11.9073 18.3319 12.0922 18.3319 12.244 18.4168L17.5195 21.3698C17.8918 21.5782 18.3373 21.2545 18.2541 20.8361L17.0759 14.9062C17.042 14.7357 17.0991 14.5597 17.2268 14.4417L21.6655 10.3369C21.9788 10.0472 21.8086 9.52351 21.3849 9.47327L15.3812 8.76144C15.2085 8.74096 15.0589 8.63224 14.986 8.47434Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </li>
            <li>
              <p onClick={()=>navigate('/useredit')}>
                Edytuj dane konta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11.5833"
                    cy="6.8124"
                    r="4.06966"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11.6906 21.1906C5.78734 21.1906 3.05127 21.1906 3.05127 17.9903C3.05127 14.79 7.43732 13.322 11.6906 13.322C13.4843 13.322 14.2667 13.2845 15.7245 13.8264"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.1187 18.8745L19.1016 12.7399L21.6141 14.3712L17.4451 20.7925L15.2495 21.649L15.1187 18.8745Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </li>
            <p>
              <div className="border-2 border-l-transparent border-r-transparent border-t-transparent border-b-purple rounded-null w-full mt-2 mb-2"></div>
            </p>
            <li>
              <label for="my-modal-4" class="">
                Lokalizacja
              </label>
            </li>
            <li>
              <label for="my-modal-4-1" class="">
                Regulamin
              </label>
            </li>
            <li>
              <label for="my-modal-4-2" class="">
                O nas
              </label>
            </li>
            <li>
              <label for="my-modal-4-3" class="">
                Kontakt
              </label>
            </li>
          </ul>
        </div>
        <p className="normal-case sm:text-4xl tracking-widest text-left pl-8">
          {" "}
          KINOWO
        </p>
      </div>

      <div className="navbar-end">
        <Searchinput />
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative bg-dark-purple" for="">
            <h3 class="text-dark-pink text-3xl">Lokalizacja</h3>
            <p class="py-4">
            <div className="flex flex-nowrap ">
            <Number>01</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 sm:text-thin">
              Cinema City Wolności
            </p>
          </div>
          <div className="flex flex-nowrap ">
            <Number>02</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 ">
              Cinema City Galeria Jurajska
            </p>
          </div>
          <div className="flex flex-nowrap ">
            <Number>03</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4 ">
              Cinema City Poznań
            </p>
          </div>
          <div className="flex flex-nowrap ">
            <Number>04</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4">
              Cinema City Warszawa
            </p>
          </div>
          <div className="flex flex-nowrap ">
            <Number>05</Number>
            <p className="self-center text-white min-[400px]:text-3xl ml-4">
              Stanowiska sponsorów
            </p>
          </div>
            </p>
          </label>
        </label>
        <input type="checkbox" id="my-modal-4-1" class="modal-toggle" />
        <label for="my-modal-4-1" class="modal cursor-pointer">
          <label class="modal-box relative bg-dark-purple" for="">
            <h3 class="text-dark-pink text-3xl">Regulamin</h3>
            <p class="py-4 text-white">
              Niniejsza polityka prywatności wyjaśnia, w jaki sposób gromadzimy,
              wykorzystujemy, przechowujemy i chronimy informacje osobowe
              naszych użytkowników w ramach systemu logowania i zarządzania
              kinem. Szanujemy Twoją prywatność i dokładamy wszelkich starań,
              aby chronić Twoje dane osobowe zgodnie z obowiązującymi przepisami
              o ochronie prywatności. <br /> <br />
              <p className="text-dark-pink">
                1. Gromadzenie informacji osobowych:{" "}
              </p>
              Podczas rejestracji i korzystania z naszego systemu logowania,
              możemy prosić o podanie pewnych informacji osobowych, takich jak
              imię, nazwisko, adres e-mail, numer telefonu itp. Gromadzimy te
              dane w celu umożliwienia dostępu do systemu i zapewnienia
              odpowiednich usług zgodnie z Twoimi preferencjami. <br /> <br />
              <p className="text-dark-pink">
                2. Wykorzystanie informacji osobowych:{" "}
              </p>
              Informacje osobowe, które nam dostarczasz, wykorzystujemy w celu
              umożliwienia Ci korzystania z systemu logowania i zapewnienia
              dostępu do odpowiednich funkcji zgodnie z Twoją rolą w systemie.
              Możemy również wykorzystywać te dane w celach analizy,
              doskonalenia naszych usług, dostosowywania treści oraz w celach
              marketingowych, o ile wyrazisz na to zgodę. <br /> <br />
              <p className="text-dark-pink">
                3. Przechowywanie i ochrona informacji osobowych:{" "}
              </p>
              Dane osobowe przechowujemy przez okres niezbędny do realizacji
              celów, dla których zostały zebrane, o ile nie przewiduje się
              dłuższego okresu przechowywania zgodnie z obowiązującymi
              przepisami. Stosujemy odpowiednie środki techniczne i
              organizacyjne, aby chronić Twoje dane osobowe przed nieuprawnionym
              dostępem, utratą, zmianą lub ujawnieniem.
              <br /> <br />
              <p className="text-dark-pink">
                4. Udostępnianie informacji osobowych:{" "}
              </p>
              Właściwe informacje osobowe mogą być udostępniane tylko w
              określonych przypadkach, takich jak przestrzeganie obowiązujących
              przepisów prawa, odpowiedzi na żądania organów ścigania lub w celu
              ochrony naszych praw lub bezpieczeństwa. Nie sprzedajemy ani nie
              udostępniamy Twoich danych osobowych firmom trzecim w celach
              marketingowych bez Twojej zgody. <br /> <br />
              <p className="text-dark-pink">5. Prawa użytkownika: </p>
              Masz prawo do dostępu, poprawiania, usunięcia lub ograniczenia
              przetwarzania swoich danych osobowych. Możesz również w każdej
              chwili wycofać swoją zgodę na przetwarzanie danych osobowych. Aby
              skorzystać z tych praw lub uzyskać więcej informacji, skontaktuj
              się z nami za pośrednictwem danych kontaktowych podanych w sekcji
              "Kontakt". <br /> <br />
              <p className="text-dark-pink">
                6. Zmiany w polityce prywatności:
              </p>
              Możemy od czasu do czasu aktualizować naszą politykę prywatności.
              W przypadku istotnych zmian poinformujemy Cię o nich poprzez
              odpowiednie środki, takie jak powiadomienie na stronie logowania
              lub wysłanie wiadomości e-mail. Zachęcamy do regularnego
              sprawdzania naszej polityki prywatności, aby być na bieżąco z
              naszymi praktykami ochrony prywatności. Jeśli masz jakiekolwiek
              pytania dotyczące naszej polityki prywatności lub ochrony danych,
              prosimy o kontaktowanie się z nami za pomocą danych kontaktowych
              podanych w sekcji "Kontakt"
            </p>
          </label>
        </label>
        <input type="checkbox" id="my-modal-4-2" class="modal-toggle" />
        <label for="my-modal-4-2" class="modal cursor-pointer">
          <label class="modal-box relative bg-dark-purple" for="">
            <li className=" text-dark-pink text-3xl"> Kim jesteśmy?</li>
            <p className=" py-4 mt-2 max-w-md text-white">
              Jesteśmy firmą, która zapewnia kompleksowe rozwiązania dla kin i
              sieci kinowych, a nasza oferta obejmuje również wiele kin, które
              działają pod naszą opieką. Znajdziesz tutaj informacje o naszych
              kinach oraz o miejscach, w których możesz je znaleźć.
            </p>
            <li className="text-3xl  text-dark-pink  text-end">
              Nasza filozofia
            </li>
            <p className="sm:text-start lg:text-end mt-2 text-white">
              Nasze kina oferują wyjątkowe wrażenia kinowe, dzięki najnowszym
              technologiom w dziedzinie projekcji filmów, dźwięku i innych
              innowacyjnych rozwiązaniom. nasze sale kinowe są przestronne i
              wygodne, a wybór filmów jest na tyle szeroki, że każdy kinoman
              znajdzie coś dla siebie.
            </p>
          </label>
        </label>
        <input type="checkbox" id="my-modal-4-3" class="modal-toggle" />
        <label for="my-modal-4-3" class="modal cursor-pointer ">
          <label class="modal-box relative bg-dark-purple" for="">
            <h3 class="text-dark-pink  font-bold text-2xl">Kontakt</h3>
            <p class="py-4 text-white">
              Jeśli masz pytania lub potrzebujesz pomocy technicznej dotyczącej
              naszego systemu logowania i zarządzania kinem, poniżej znajdują
              się informacje kontaktowe oraz informacje dotyczące wsparcia
              technicznego.<br></br>
              <p className="text-2xl text-dark-pink "> Dane kontaktowe:</p>
              <ul className="text-center">
                <li>
                  {" "}
                  <p className=" text-dark-pink ">Telefon:</p> +48 123 456 789{" "}
                </li>
                <li>
                  {" "}
                  <p className=" text-dark-pink ">Adres e-mail:</p>{" "}
                  support@kinomania.com
                </li>
                <li>
                  {" "}
                  <p className=" text-dark-pink ">Godziny pracy:</p>{" "}
                  Poniedziałek - Piątek, od 9:00 do 17:00
                </li>
              </ul>
            </p>
          </label>
        </label>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.7163 2.75482H7.21631V2.75482C4.73103 2.75482 2.71631 4.76954 2.71631 7.25482V16.7422C2.71631 19.2275 4.73103 21.2422 7.21631 21.2422V21.2422H11.7163"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9761 11.9986H21.3529M21.3529 11.9986L17.8053 8.45093M21.3529 11.9986L17.8053 15.5462"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
