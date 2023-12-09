import { Cart, Products } from "./components";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";

const App = () => {
  return (
    <>
      <FirebaseContextProvider>
        <CartContextProvider>
          <Products />
          <Cart />
        </CartContextProvider>
      </FirebaseContextProvider>  
    </> 
  );
};

export default App;