import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "./cartContext";

function NavBar() {
  const carrito = useContext(CartContext);

  if (!carrito.cartList.compraTerminada[0]) {
    return (
      <div className="flex justify-between items-center px-3  bg-slate-700 text-gray-100 shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <Link to="/">
            <img
              src="/images/liebre.png"
              alt="Logo de Mercado Liebre"
              className="w-20 me-5 my-3 "
            />
          </Link>
          <Link to="/">
            <h2 className="font-bold text-2xl  text-gray-100">
              Mercado Liebre
            </h2>
          </Link>
        </div>

        <nav className="flex items-end self-end me-5 ">
          <ul className="flex flex-wrap">
            <li className="rounded-tl rounded-tr font-bold hover:bg-slate-500 transition delay-50">
              <NavLink
                to="/categoria/Música"
                className="px-5 py-2 flex items-center  h-full rounded-tl rounded-tr"
              >
                Música
              </NavLink>
            </li>
            <li className="rounded-tl rounded-tr font-bold hover:bg-slate-500 transition delay-50">
              <NavLink
                to="/categoria/Electrónica"
                className="px-5 py-2 flex items-center  h-full rounded-tl rounded-tr"
              >
                Electrónica
              </NavLink>
            </li>
            <li className="rounded-tl rounded-tr font-bold hover:bg-slate-500 transition delay-50">
              <NavLink
                to="/categoria/Ropa"
                className="px-5 py-2 flex items-center  h-full rounded-tl rounded-tr"
              >
                Ropa
              </NavLink>
            </li>
            <li className="rounded-tl rounded-tr font-bold hover:bg-slate-500 transition delay-50">
              <NavLink
                to="/categoria/Hogar"
                className="px-5 py-2 flex items-center  h-full rounded-tl rounded-tr"
              >
                Hogar
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;
