const products = [
    { id: "1", name: "Natura Humor", img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwe9c34e20/NATARG-1921_1.jpg", price: 10000, category: "perfumes", description: "Perfume de mujer de la marca Natura", stock: 10 },
    { id: "2", name: "Cocot", img: "https://farmacityar.vtexassets.com/arquivos/ids/221430-1600-auto?v=637852866292000000&width=1600&height=auto&aspect=true", price: 8600, category: "perfumes", description: "Perfume de mujer marca Cocot", stock: 10 },
    { id: "3", name: "Hugo Boss", img: "https://http2.mlstatic.com/D_NQ_NP_2X_770698-MLA44752571583_012021-F.webp", price: 70973, category: "perfumes", description: "Perfume de hombre marca Hugo Boss", stock: 10 },
    { id: "4", name: "Kevin", img: "https://farmalife.vteximg.com.br/arquivos/ids/168007-1200-1200/7791600037017.jpg?v=637345634253800000", price: 100, category: "perfumes", description: "Perfume de hombre marca Kevin", stock: 10 },
    { id: "5", name: "Natura Una", img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwc2d63748/NATARG-34262_1.jpg", price: 6980, category: "maquillaje", description: "Delineador de ojos marca Natura", stock: 10 },
    { id: "6", name: "TimeWase", img: "https://i0.wp.com/soyfemenina.com.ar/wp-content/uploads/2016/07/set-microexfoliacion-timewise.jpg?fit=285%2C550&ssl=1", price: 5723, category: "maquillaje", description: "Base para todo tipo de piel marca Mary Key", stock: 10 },
    { id: "7", name: "Brochas", img: "https://m.media-amazon.com/images/I/61KYYUvFj7L._SL1500_.jpg", price: 19710, category: "maquillaje", description: "Pinceles para maquillaje de fibras finas", stock: 10 },
    { id: "8", name: "Anastasia Beverly Hills", img: "https://http2.mlstatic.com/D_NQ_NP_918518-MLU69822390887_062023-O.webp", price: 80000, category: "maquillaje", description: "Sombras para ojos de colores con larga duración", stock: 10 },
    { id: "9", name: "Kylie Jenner Lipstick", img: "https://m.media-amazon.com/images/I/61YVyDv6rbL._SL1000_.jpg", price: 10380, category: "maquillaje", description: "Labiales de la marca Kylie jenner en tonos nude", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("Se agotó el Stock");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };