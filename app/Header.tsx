import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex  p-3 justify-between items-center">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
