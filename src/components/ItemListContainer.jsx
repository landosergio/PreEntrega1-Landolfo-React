import ItemList from "./ItemList";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fbase } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, where, query } from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  let inCart = false;

  useEffect(() => {
    const db = getFirestore(fbase);
    const productosCollection = collection(db, "productos");
    const q = query(
      productosCollection,
      where("categoria", "==", categoria || "")
    );

    const consulta = categoria ? getDocs(q) : getDocs(productosCollection);

    consulta
      .then((productosDocs) => {
        const listaProductos = productosDocs.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));

        setProductos(listaProductos);
      })
      .catch(() => {
        toast.error("Hubo un problema, inténtalo de nuevo");
      });
  }, [categoria]);

  return (
    <ItemList
      greeting={greeting}
      categoria={categoria}
      productos={productos}
      inCart={inCart}
    ></ItemList>
  );
}

export default ItemListContainer;
