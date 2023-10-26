import ItemCount from "./ItemCount";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import stockProductos from "../stock.json";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  let inCart = false;

  useEffect(() => {
    const pedirItems = new Promise((resolve, reject) => {
      setTimeout(() => resolve(stockProductos), 1000);
    });
    pedirItems.then((stockProductos) => {
      let categoriaProductos = stockProductos;

      if (categoria) {
        categoriaProductos = stockProductos.filter(
          (producto) => producto.categoria == categoria
        );
      }
      setProductos(categoriaProductos);
    });
  }, [categoria]);

  return (
    <div className="flex flex-col items-center ">
      <h2 className="inline-block my-8 text-3xl text-slate-700  font-bold ">
        {greeting || categoria}
      </h2>
      <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-20 my-20">
        {productos[0] &&
          productos.map((producto) => (
            <li key={producto.id}>
              <ItemCard item={producto} inCart={inCart} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
