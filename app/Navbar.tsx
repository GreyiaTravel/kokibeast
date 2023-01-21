"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaMixer } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let desktopNav = (
    <nav className={`p-3 sm:hidden flex md:block`}>
      <ul className="relative flex justify-start font-semibold">
        <li className="px-3 py-1 hover:underline text-yellow-100 hover:text-white active:text-white active:underline">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-3 py-1 hover:underline text-yellow-100 hover:text-white">
          <Link href={"/videos"}>Videos</Link>
        </li>
        <li className="px-3 py-1 hover:underline text-yellow-100 hover:text-white">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );

  let mobileMenu;

  if (open) {
    mobileMenu = (
      <nav className="fixed top-0 right-0 h-full w-1/2 p-3 flex flex-col items-center text-yellow-100 bg-yellow-700">
        <FaMixer
          className="absolute right-4 top-14 rounded-full hover:bg-white cursor-pointer text-4xl p-1 hover:text-yellow-700"
          onClick={() => setOpen(!open)}
        />

        <ul className="flex justify-center flex-col items-center w-4/5 mt-80 font-semibold">
          <li
            className="my-3 p-3 hover:bg-yellow-100 hover:text-yellow-700 w-full"
            onClick={() => setOpen(!open)}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className="my-3 p-3 hover:bg-yellow-100 hover:text-yellow-700 w-full"
            onClick={() => setOpen(!open)}
          >
            <Link href={"/videos"}>Videos</Link>
          </li>
          <li
            className="my-3 p-3 hover:bg-yellow-100 hover:text-yellow-700 w-full"
            onClick={() => setOpen(!open)}
          >
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        {desktopNav}
        <button className="px-4 py-1 mr-3 bg-green-600 rounded-lg hover:bg-white hover:text-green-600 font-semibold">
          Login
        </button>
        <FaBars
          className="text-5xl cursor-pointer p-2 hover:bg-yellow-700 rounded-full text-yellow-100 md:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>
      {mobileMenu}
    </div>
  );
};

export default Navbar;
