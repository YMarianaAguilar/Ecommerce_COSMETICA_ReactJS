import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { FirebaseContext } from '../../context/FirebaseContext';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { getProductById, product } = useContext(FirebaseContext);

  //
  useEffect(() => {
    setIsLoading(true);
    getProductById(id)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [])
  return (
    <div>
      {
        isLoading ? 
        <h2>Cargando producto...</h2> : 
        product && <ItemDetail product={product} />
      }
      
    </div>
  )
}