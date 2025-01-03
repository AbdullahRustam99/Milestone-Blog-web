import React from "react";

const Header = () => {
  return (
    <>
      <div className=" p-4 md:p-10 w-full bg-teal-600 flex flex-col items-center md:flex-row justify-between">
        <h1 className="flex gap-5 items-center text-4xl text-white font-semibold">
          Bloger
        </h1>
        <div className="flex gap-5 items-center text-[17px] md:text-4xl text-white font-semibold">
          <a href="/" className="hover:text-red-900 transition-all">
            Home
          </a>
          <a href="#" className="hover:text-red-900 transition-all">
            About
          </a>
          <a href="#" className="hover:text-red-900 transition-all">
            Blogs
          </a>
          <a href="#" className="hover:text-red-900 transition-all">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
