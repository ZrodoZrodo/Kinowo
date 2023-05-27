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
      </div>
    
        <a className="normal-case text-xl tracking-widest text-left">KINOWO</a>
      
      <div className="navbar-end">
        <input
          type="text"
          placeholder="username@site.com"
          class="input input-bordered w-full pr-16"
        />
        
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
