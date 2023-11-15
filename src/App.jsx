import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

// Componentes de ejemplo
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;



export default function App() {
  return (
      
      <Router>
        <NavBar />
        <Routes>
          {/* Definir las rutas */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </Router>
  
  );
}
