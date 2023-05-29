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
              <a>
                Rezerwuj bilet{" "}
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
              </a>
            </li>
            <li>
              <a >
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
              </a>
            </li>
            <li>
              <a>
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
              </a>
            </li>
            <li>
              <a>
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
              </a>
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
        <a className="normal-case sm:text-4xl tracking-widest text-left pl-8">
          {" "}
          KINOWO
        </a>
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
