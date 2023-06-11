import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar pt-8 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>Home</p>
            </li>
            <li tabindex="0">
              <p class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </p>
              <ul class="p-2">
                <li>
                  <p>Submenu 1</p>
                </li>
                <li>
                  <p>Submenu 2</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Item 3</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal text-white px-1">
          <li>
            <p>Panel główny</p>
          </li>
          <li>
            <AnchorLink href="#poznaj">Poznaj nas</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#lokalizacja">Lokalizacja</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#zaczynajmy">Zaczynajmy</AnchorLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <Link to="/login/user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          className="mr-6"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 5.90314C19.5 3.83207 17.821 2.15314 15.75 2.15314H11.25C10.8357 2.15314 10.5 1.81735 10.5 1.40314C10.5 0.988927 10.8357 0.65314 11.25 0.65314H15.75C18.6495 0.65314 21 3.00365 21 5.90314V15.6525C21 18.552 18.6495 20.9025 15.75 20.9025H11.25C10.8357 20.9025 10.5 20.5667 10.5 20.1525C10.5 19.7383 10.8357 19.4025 11.25 19.4025H15.75C17.821 19.4025 19.5 17.7236 19.5 15.6525V5.90314ZM9.07932 6.65337C8.78849 6.35843 8.31363 6.35509 8.01868 6.64591C7.72374 6.93674 7.7204 7.4116 8.01122 7.70655L10.3001 10.0279H1.71606C1.30185 10.0279 0.966064 10.3636 0.966064 10.7779C0.966064 11.1921 1.30185 11.5279 1.71606 11.5279H10.3001L8.01122 13.8492C7.7204 14.1441 7.72374 14.619 8.01868 14.9098C8.31363 15.2006 8.78849 15.1973 9.07932 14.9024L12.627 11.3044C12.9149 11.0124 12.9149 10.5433 12.627 10.2513L9.07932 6.65337Z"
            fill="white"
          />
        </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
