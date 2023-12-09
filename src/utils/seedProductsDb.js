import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Natura Humor", img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwe9c34e20/NATARG-1921_1.jpg", price: 10000, category: "perfumes", description: "Perfume de mujer de la marca Natura", stock: 12 },
  { name: "Cocot", img: "https://farmacityar.vtexassets.com/arquivos/ids/221430-1600-auto?v=637852866292000000&width=1600&height=auto&aspect=true", price: 8600, category: "perfumes", description: "Perfume de mujer marca Cocot", stock: 15 },
  { name: "Hugo Boss", img: "https://http2.mlstatic.com/D_NQ_NP_2X_770698-MLA44752571583_012021-F.webp", price: 70973, category: "perfumes", description: "Perfume de hombre marca Hugo Boss", stock: 8 },
  { name: "Kevin", img: "https://farmalife.vteximg.com.br/arquivos/ids/168007-1200-1200/7791600037017.jpg?v=637345634253800000", price: 8000, category: "perfumes", description: "Perfume de hombre marca Kevin", stock: 15 },
  { name: "Natura Una", img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwc2d63748/NATARG-34262_1.jpg", price: 6980, category: "maquillaje", description: "Delineador de ojos marca Natura", stock: 14 },
  { name: "TimeWase", img: "https://i0.wp.com/soyfemenina.com.ar/wp-content/uploads/2016/07/set-microexfoliacion-timewise.jpg?fit=285%2C550&ssl=1", price: 5723, category: "maquillaje", description: "Base para todo tipo de piel marca Mary Key", stock: 10 },
  { name: "Brochas", img: "https://m.media-amazon.com/images/I/61KYYUvFj7L._SL1500_.jpg", price: 19710, category: "maquillaje", description: "Pinceles para maquillaje de fibras finas", stock: 20 },
  { name: "Anastasia Beverly Hills", img: "https://http2.mlstatic.com/D_NQ_NP_918518-MLU69822390887_062023-O.webp", price: 80000, category: "maquillaje", description: "Sombras para ojos de colores con larga duración", stock: 6 },
  { name: "Kylie Jenner Lipstick", img: "https://m.media-amazon.com/images/I/61YVyDv6rbL._SL1000_.jpg", price: 10380, category: "maquillaje", description: "Labiales de la marca Kylie jenner en tonos nude", stock: 9 },

];

export const seedProductsDb = () => { 
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};