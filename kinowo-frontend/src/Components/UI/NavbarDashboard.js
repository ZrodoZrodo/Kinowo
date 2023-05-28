const NavbarDashboard = (props) => {
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
              <a>Rezerwuj bilet</a>
            </li>
            <li>
              <a>Historia</a>
            </li>
            <li>
              <a>Oceny</a>
            </li>
            <li>
              <a>Edytuj dane konta</a>
            </li>
            <li>
              <a>Lokalizacja</a>
            </li>
            <li>
              <a>Regulamin</a>
            </li>
            <li>
              <a>O nas</a>
            </li>
            <li>
              <a>Kontakt</a>
            </li>
          </ul>
        </div>
        <a className="normal-case sm:text-4xl tracking-widest text-left pl-8"> KINOWO</a>
      </div>

      

      <div className="navbar-end">
        <input
          type="text"
          placeholder="Wyszukaj kino albo film"
          class="input input-bordered w-1/3 pr-16"
        />

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
