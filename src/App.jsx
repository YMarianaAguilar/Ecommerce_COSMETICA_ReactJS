import { Cart, ItemDetailContainer, ItemListContainer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { CartContextProvider } from './context/CartContext';
import { FirebaseContextProvider } from "./context/FirebaseContext";

const App = () => {
  return (
    <CartContextProvider>
      <FirebaseContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a C O S M E T I C A"} />} />
            <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a C O S M E T I C A"} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </FirebaseContextProvider>
    </CartContextProvider>
  );
};

export default App;