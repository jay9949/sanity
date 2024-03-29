import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white px-5 py-2">
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              Jay's Blog
            </h2>
          </Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5 lg:text-lg">
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="lg:text-lg">
              <button>
                <Link to="/blog">Blog</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
