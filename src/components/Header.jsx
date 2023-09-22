import NavBar from "./NavBar";
import logo from "../images/liebre.png";

function Header() {
  return (
    <header className="flex justify-between items-center px-3  bg-slate-700 text-gray-100 shadow-md">
      <div className="flex items-center">
        <a href="#">
          <img
            src={logo}
            alt="Logo de Mercado Liebre"
            className="w-20 me-5 my-3 "
          />
        </a>
        <a href="#">
          <h2 className="font-bold text-2xl  text-gray-100">Mercado Liebre</h2>
        </a>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
