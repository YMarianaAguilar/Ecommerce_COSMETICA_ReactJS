import { useContext, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { FirebaseContext } from '../../context/FirebaseContext';

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { getProductsDB, products } = useContext(FirebaseContext);

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [category]);


  return (
    <>
      <div> {greeting} </div>
      {
        isLoading ? <h2>Buscando Stock ...</h2> : 
        <>
        {/* <p>{JSON.stringify(products)}</p> */}
        <ItemList products={products} />
        </>
      }
    </>
  );
};


