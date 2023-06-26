import React from "react";

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="/troll-face.png"
          alt="meme-gen-logo"
          className="header-logo"
        />
        <span className="font-semibold text-2xl tracking-tight">
          Meme Generator
        </span>
      </div>
    </nav>
  );
}

export default Header;
