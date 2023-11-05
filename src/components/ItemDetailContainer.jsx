import ItemDetail from "./ItemDetail";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fbase } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";

function ItemDeatailContainer() {
  const [producto, setProducto] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(fbase);
    const docRef = doc(db, "productos", id);

    const consulta = getDoc(docRef);

    consulta
      .then((prod) => {
        setProducto({ id: prod.id, ...prod.data() });
      })
      .catch(() => {
        toast.error("Hubo un problema, inténtalo de nuevo");
      });
  }, []);

  return (
    <div className="flex justify-center">
      {producto ? (
        producto.nombre ? (
          <ItemDetail producto={producto} />
        ) : (
          <p className="my-10 text-2xl">
            No existe un producto con el id "{producto.id}"
          </p>
        )
      ) : (
        <p className="my-10 text-2xl">Cargando...</p>
      )}
    </div>
  );
}

export default ItemDeatailContainer;
