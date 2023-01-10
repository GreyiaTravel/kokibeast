"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaMixer } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let menu;

  if (open) {
    menu = (
      <nav className="fixed top-0 right-0 h-full w-1/2 p-3 flex flex-col items-center text-yellow-100 bg-yellow-700">
        <FaMixer
          className="absolute right-4 top-14 rounded-full hover:bg-white cursor-pointer text-4xl p-1 hover:text-yellow-700"
          onClick={() => setOpen(!open)}
        />

        <ul className="flex justify-center flex-col items-center w-4/5 mt-80">
          <li className="my-3 p-3 hover:bg-yellow-100 hover:text-yellow-700 w-full">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="my-3 p-3 hover:bg-yellow-100 hover:text-yellow-700 w-full">
            <Link href={"/videos"}>Videos</Link>
          </li>
          <li className="my-3 p-3 hover:bg-yellow-100 hover:text-yellow-700 w-full">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div>
      <FaBars
        className="text-5xl cursor-pointer p-2 hover:bg-yellow-700 rounded-full"
        onClick={() => setOpen(!open)}
      />
      {menu}
    </div>
  );
};

export default Navbar;
