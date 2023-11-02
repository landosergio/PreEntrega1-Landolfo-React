import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { fbase } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";

function ItemDeatailContainer() {
  const [producto, setProducto] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(fbase);
    const docRef = doc(db, "productos", id);

    getDoc(docRef).then((prod) => {
      setProducto({ id: prod.id, ...prod.data() });
    });
  }, []);

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
