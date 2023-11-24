import React from 'react'
import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img style={{maxWidth: '30%'}} src={img} alt="" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`}>
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Detalles
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};