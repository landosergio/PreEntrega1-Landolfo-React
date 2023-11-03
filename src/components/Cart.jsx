import Item from "./Item";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { fbase } from "../firebaseConfig";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function Cart() {
  const carrito = useContext(CartContext);

  if (carrito.cartList.compraTerminada[0]) {
    return (
      <div className="flex flex-col items-center">
        <h2 className=" my-8 text-3xl text-slate-700  font-bold">
          ¡Compra terminada!
        </h2>
        <ul className="my-10">
          {carrito.cartList.compraTerminada.map((producto) => (
            <li key={producto.id} className="flex my-2">
              <p>
                {producto.nombre} ---- Cant: {producto.cant}
              </p>
            </li>
          ))}
        </ul>
        <Link to="/">
          <button
            onClick={carrito.clearCart}
            className="mx-auto my-2 p-2 text-sm font-bold  border-2 border-slate-800 rounded-md"
          >
            Volver al catálogo
          </button>
        </Link>
      </div>
    );
  }

  let inCart = true;
  let totalCarrito = carrito.cartList.lista.reduce(
    (acum, prod) => acum + prod.precio * prod.cant,
    0
  );

  function crearOrden(nombre, correo, telefono) {
    const order = {
      buyer: { name: nombre, email: correo, phone: telefono },
      items: carrito.cartList.lista.map((prod) => ({
        id: prod.id,
        title: prod.nombre,
        quantity: prod.cant,
        price: prod.precio,
      })),
      date: serverTimestamp(),
      total: totalCarrito,
    };
    return order;
  }

  function finalizarCompra(e) {
    e.preventDefault();
    const nombre = e.currentTarget.elements.name.value;
    const correo = e.currentTarget.elements.email.value;
    const telefono = e.currentTarget.elements.phone.value;

    if (nombre && correo && telefono) {
      if (!Number.isNaN(telefono) && telefono.toString().length == 10) {
        const order = crearOrden(nombre, correo, telefono);
        const db = getFirestore(fbase);
        const ordersCollection = collection(db, "orders");
        const docRef = addDoc(ordersCollection, order);

        docRef.then(() => carrito.terminarCompra());
      } else {
        toast.error(
          "Debes ingresar un teléfono en formato válido de 10 dígitos"
        );
      }
    } else {
      toast.error("Debes completar todos los datos");
    }
  }

  return (
    <>
      <h2 className="text-center my-8 text-3xl text-slate-700  font-bold ">
        Carrito
      </h2>
      <div className="container mx-auto">
        {carrito.cartList.lista[0] ? (
          <>
            <ul className="flex flex-wrap my-10">
              {carrito.cartList.lista.map((producto) => (
                <li key={producto.id} className="flex my-10">
                  <Item item={producto} inCart={inCart} />
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
              <p className="text-3xl">Valor total: ${totalCarrito}</p>
            </div>

            <div className="flex justify-center">
              <form
                method="post"
                onSubmit={(e) => finalizarCompra(e)}
                className="flex flex-col my-10"
              >
                <label className="flex justify-between my-2">
                  Nombre:
                  <input
                    name="name"
                    type="text"
                    className="mx-4 border rounded-md"
                  />
                </label>
                <label className="flex justify-between my-2">
                  Correo:
                  <input
                    name="email"
                    type="email"
                    className="mx-4 border rounded-md"
                  />
                </label>
                <label className="flex justify-between my-2">
                  Teléfono:
                  <input name="phone" className="mx-4 border rounded-md" />
                </label>

                <button
                  type="reset"
                  className="mx-auto my-2 p-1 text-sm border border-slate-800 rounded-md"
                >
                  Borrar
                </button>
                <button
                  type="submit"
                  className="mx-auto my-2 p-2 text-sm font-bold  border-2 border-slate-800 rounded-md"
                >
                  FINALIZAR COMPRA
                </button>
              </form>
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
