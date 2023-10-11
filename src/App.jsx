import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDeatailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido!" />}
        ></Route>
        <Route
          path="/categoria/:categoria"
          element={<ItemListContainer />}
        ></Route>
        <Route path="/item/:id" element={<ItemDeatailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
