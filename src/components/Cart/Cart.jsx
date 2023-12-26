import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const [nroOrden, setNroOrden] = useState(null);
  const { cart, removeAllProducts } = useContext(CartContext);
  const { getProductById, product, addOrderDB, discountStock } = useContext(FirebaseContext);

  const handleRealizarCompra = () => {
    let order = {
      products: cart,
      form: values,
      date: new Date(),
    };
    addOrderDB(order).then((response) => {
      setNroOrden(response._key.path.segments[1]);
      removeAllProducts();
      order.products.forEach((product) => {
        discountStock(product, product.quantity);
      });
    });
  };

  const handleChange = (event) => {
    setValues({ ...values, ...{ [event.target.name]: event.target.value } })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

      {
        nroOrden ? (
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ¡Se ha generado exitosamente la compra! Número de orden: {nroOrden}.
            </h2>
          </div>)
          :
          cart?.length > 0 ? (
            <>
              <ul role="list" className="divide-y divide-gray-100">
                {
                  cart.map((product) => (
                    <li key={product.email} className="flex justify-between gap-x-6 py-5">
                      <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={product.img} alt="" />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">{product.name}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.description}</p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">Subtotal: ${product.subTotal}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Precio: ${product.price} - Cantidad: {product.quantity} - Stock: {product.stock}
                        </p>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre
                    </label>
                    <div className="mt-2">
                      <input onChange={handleChange}
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                      Apellido
                    </label>
                    <div className="mt-2">
                      <input onChange={handleChange}
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Teléfono
                    </label>
                    <div className="mt-2">
                      <input onChange={handleChange}
                        id="phone"
                        name="phone"
                        type="number"
                        autoComplete="phone"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <input onChange={handleChange}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="emailVerify" className="block text-sm font-medium leading-6 text-gray-900">
                      Verificar Email
                    </label>
                    <div className="mt-2">
                      <input onChange={handleChange}
                        id="emailVerify"
                        name="emailVerify"
                        type="email"
                        autoComplete="emailVerify"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={handleRealizarCompra}
                    >
                      Realizar compra
                    </button>
                  </div>
                </form>
              </div>
            </>
          )
            :
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Carrito vacío
              </h2>
            </div>
      }
    </div>
  );
};
