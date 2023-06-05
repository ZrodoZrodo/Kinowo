import poster1 from "../UI/Posters/images-w1400.png";
import poster2 from "../UI/Posters/unnamed.png";
import top from "../UI/Posters/top.png";
import intru from "../UI/Posters/intru.png";
const About = () => {
  return (
    <div className="About__backgorund md:h-max pt-8 px-10 " id="poznaj">
      <div className="flex flex-wrap m-8">
        <div className="">
          <p className="text-white sm:text-6xl text-2xl"> Doświadczaj. </p>
          <p className="text-white sm:text-6xl text-2xl"> Odkrywaj. </p>
          <p className="text-white sm:text-6xl text-2xl"> Oglądaj. </p>
          <p className="text-white sm:text-center md:text-left  w-1/2 mt-6">
            Cieszcie się z nami każdym seansie, z każdą chwilą, Niech filmowy
            świat stanie się dla Was rajem, a każda historia zostanie w Waszej
            duszy na zawsze.
          </p>
        </div>
        <div className="grid h-2/3 w-full  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-6">
          <div className="flex justify-center gap-6 mt-2">
            <img src={poster2} alt="poster" />
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <img src={top} alt="poster" />
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <img src={poster1} alt="poster" />
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <img src={intru} alt="poster" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        <div>
          <p className="text-2xl text-white text-3xl"> Kim jesteśmy?</p>
          <p className="text-start mt-2 max-w-xs text-white">
            Jesteśmy firmą, która zapewnia kompleksowe rozwiązania dla kin i
            sieci kinowych, a nasza oferta obejmuje również wiele kin, które
            działają pod naszą opieką. Znajdziesz tutaj informacje o naszych
            kinach oraz o miejscach, w których możesz je znaleźć.
          </p>
        </div>
        <div className="flex justify-center h-full">
          <div className=" invisible xl:visible border-2 border-l-dark-red border-r-transparent border-t-transparent border-b-transparent rounded-full "></div>
        </div>
        <div>
          <p className="text-3xl text-white text-center">
          
            Zacznijmy wspólną pracę już dziś!
          </p>
          <p className="text-center mt-2 text-white">
            Nasze doświadczenie i zaangażowanie,To jak nieskończona skrzynia
            pełna wiedzy i umiejętności,Które pozwalają nam na efektywne
            działanie,A także na dostosowanie naszych usług do potrzeb klientów.
          </p>
        </div>
        <div className="flex justify-center " >
          <div className=" invisible  xl:visible border-2 border-l-dark-red  border-r-transparent border-t-transparent border-b-transparent rounded-full "></div>
        </div>
        <div>
          <p className="text-3xl sm:text-start text-white xl:text-end">
            {" "}
            Nasza filozofia
          </p>
          <p className="sm:text-start lg:text-end mt-2 text-white">
            Nasze kina oferują wyjątkowe wrażenia kinowe, dzięki najnowszym
            technologiom w dziedzinie projekcji filmów, dźwięku i innych
            innowacyjnych rozwiązaniom. nasze sale kinowe są przestronne i
            wygodne, a wybór filmów jest na tyle szeroki, że każdy kinoman
            znajdzie coś dla siebie.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-2 border-l-dark-red h-12 border-r-transparent border-t-transparent border-b-transparent rounded-null "></div>
      </div>
    </div>
  );
};

export default About;
