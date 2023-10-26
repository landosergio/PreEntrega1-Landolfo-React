import ItemCard from "./ItemCard";
import { CartContext } from "./cartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const carrito = useContext(CartContext);

  let inCart = true;

  return (
    <>
      <h2 className="text-center my-8 text-3xl text-slate-700  font-bold ">
        Carrito
      </h2>
      <div className="container mx-auto">
        {carrito.cartList[0] ? (
          <>
            <ul className="flex flex-wrap my-10">
              {carrito.cartList.map((producto) => (
                <li key={producto.id} className="flex my-10">
                  <ItemCard item={producto} inCart={inCart} />
                  <div className="flex flex-col items-center mx-10">
                    <p className="text-2xl ">Cantidad: {producto.cant} </p>
                    <button
                      className="text-xl mt-5 p-3 rounded-lg shadow-lg"
                      onClick={() => carrito.removeItem(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-around">
              <button
                className="text-md font-bold p-3 border-2 border-slate-800 rounded-md"
                onClick={carrito.clearCart}
              >
                VACIAR CARRITO
              </button>
              <p className="text-3xl">
                Valor total: $
                {carrito.cartList.reduce(
                  (acum, prod) => acum + prod.precio * prod.cant,
                  0
                )}
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-xl">
              Tu carrito está vacío, ¡ve a comprar algo!
            </p>
            <Link to="/">
              <img
                src="/images/liebre.png"
                alt="Logo de Mercado Liebre"
                className="w-20 my-5 "
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
