import { useEffect, useState } from "react";
import stockProductos from "../stock.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDeatailContainer() {
  const [producto, setProducto] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const pedirItems = new Promise((resolve, reject) => {
      setTimeout(() => resolve(stockProductos), 1000);
    });
    pedirItems.then((stockProductos) =>
      setProducto(stockProductos.find((producto) => producto.id == id))
    );
  }, []);

  function onAdd() {}

  return (
    <div className="flex justify-center">
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p className="my-10 text-2xl">Cargando...</p>
      )}
    </div>
  );
}

export default ItemDeatailContainer;
