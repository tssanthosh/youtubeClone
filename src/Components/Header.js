import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamberger"
        />
        <img
          className="h-12 -my-2"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="YoutubeLogo"
        />
      </div>
      <div className="col-span-11">
        <input
          type="text"
          className="w-1/2 border p-2 ml-16 rounded-l-full"
          name="search"
          id="srch"
        />
        <button className="p-2 border rounded-r-full">🔍</button>
      </div>
    </div>
  );
};

export default Header;
