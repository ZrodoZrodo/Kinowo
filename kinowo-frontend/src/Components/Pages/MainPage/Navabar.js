const Navbar = () => {
    return (
      <div class="navbar pt-8 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><p>Item 1</p></li>
            <li tabindex="0">
              <p class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </p>
              <ul class="p-2">
                <li><p>Submenu 1</p></li>
                <li><p>Submenu 2</p></li>
              </ul>
            </li>
            <li><p>Item 3</p></li>
          </ul>
        </div>
       
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><p>Item 1</p></li>
          <li tabindex="0">
            <p>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </p>
            <ul class="p-2">
              <li><p>Submenu 1</p></li>
              <li><p>Submenu 2</p></li>
            </ul>
          </li>
          <li><p>Item 3</p></li>
        </ul>
      </div>
      <div class="navbar-end">
        <p class="">Log in</p>
      </div>
    </div>
    );
  };
  
  export default Navbar;
  