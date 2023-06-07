import Footer from "../UI/Footer";
import NavbarDashboard from "../UI/NavbarDashboard";

const filmy = {
  nazwa: "fasdadas",
  opis: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker",
  ocena: "4",
};

const OpinionList = () => {
  return (
    <div className="bg-dark-purple h-screen w-full">
      <div className="bg-dark-purple h-full w-full">
        <NavbarDashboard></NavbarDashboard>
        <div className="flex flex-wrap m-8">
          <div className="">
            <p className="text-white sm:text-6xl text-2xl underline underline-offset-2 decoration-purple decoration-2">
              {" "}
              Lista opinii.{" "}
            </p>

            <p className="text-white sm:text-center md:text-left  sm:w-1/3 w-full mt-6">
              To co teraz widzisz to jest lista twoich opinii. Tutaj znajdują
              się wszystkie opinie które wystawiłeś w naszym serwisie.
            </p>
          </div>
        </div>
        <div className=" grid justify-items-center  w-full  ">
          <div className="border-2 border-l-transparent border-r-transparent border-t-purple border-b-transparent rounded-null w-1/2"></div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Nazwa filmu
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Opis filmu
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Ocena
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Jone Doe
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Opis
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                            {filmy.ocena}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Jone Doe
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        Opis
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                          4
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Jone Doe
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        Opis
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                       5
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OpinionList;
