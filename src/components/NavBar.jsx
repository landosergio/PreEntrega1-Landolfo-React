import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex items-end self-end me-5 ">
      <ul className="flex">
        <li className="   rounded-tl rounded-tr font-bold hover:bg-slate-500 ">
          <a href="#" className="px-5 flex items-center  h-full">
            Hogar
          </a>
        </li>
        <li className="py-2  rounded-tl rounded-tr font-bold hover:bg-slate-500 ">
          <a href="#" className="px-5 flex items-center  h-full">
            Electrónica
          </a>
        </li>
        <li className="py-2 rounded-tl rounded-tr font-bold hover:bg-slate-500 ">
          <a href="#" className="px-5 flex items-center  h-full">
            Música
          </a>
        </li>
        <li className="py-2  rounded-tl rounded-tr font-bold hover:bg-slate-500 ">
          <a href="#" className="px-5 flex items-center  h-full">
            Deportes
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
