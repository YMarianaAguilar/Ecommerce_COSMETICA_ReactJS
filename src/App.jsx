import { ItemDetailContainer, ItemListContainer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a C O S M E T I C A"} />} />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a C O S M E T I C A"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;