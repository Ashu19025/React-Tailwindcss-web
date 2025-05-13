import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-yellow-400  shadow-md py-2 px-4 flex justify-between items-center sticky top-0 z-50">
      <div className=" text-xl font-bold text-black  ">
        <Link to="/" className="inline-block" >
          <img src="https://i.pinimg.com/736x/b7/22/4d/b7224d209f79f92ee413206d22af5e69.jpg" 
          className="h-12 w-auto shadow-md mr-4 rounded-full"
          />
        </Link>
      </div>
      <nav className=" space-x-6 text-sm font-medium text-gray-700" >
        <Link to="/" className="hover:text-black inline-block" > Home </Link>
        <Link to="/About" className="hover:text-black" > About</Link>
        <Link to="/Contact" className="hover:text-black" > ContactUs </Link>
        <Link to="/Blog" className="hover:text-black" > Blog </Link>
      </nav>
    </header>
  );
}