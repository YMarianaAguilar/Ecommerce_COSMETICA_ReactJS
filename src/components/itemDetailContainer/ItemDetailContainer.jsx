import { useParams } from "react-router-dom";
import people from "../../constants";

export default function ItemDetailContainer() {
  const { id } = useParams();
  return (
    <>
      {people
        .filter((x) => x.id == id)
        .map((x) => {
          return (
            <div>
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Detalle del producto
                </h3>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Nombre
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {x.name}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          );
        })}
    </>
  );
}
