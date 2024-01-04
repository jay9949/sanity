import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="uppercase font-bold text-4xl tracking-wide text-center mb-16 md:text-6xl ">
        Error 404 | Page Not Found
      </h1>
      <button>
        <Link
          to="/"
          className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
        >
          Back To HomePage
        </Link>
      </button>
    </div>
  );
};

export default Error;
