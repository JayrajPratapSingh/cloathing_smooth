import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Color logo with background.svg";
const Header = () => {
  return (
    <div className="px-20 py-2 flex justify-between items-center bg-slate-700">
      <Link to="/" className=" rounded-full">
        <img src={Logo} alt="logo" className="w-52 h-16 rounded-full" />
      </Link>
      <div className="flex felx-col justify-between items-center w-[20%] duration-1000 hover:w-[30%]">
        <Link
          to="/shop"
          className="px-4 py-2 hover:bg-slate-900 hover:rounded-xl text-white font-condensed font-semibold"
        >
          SHOP
        </Link>
        
        <Link
          to="/contactus"
          className="px-4 py-2 hover:bg-slate-900 hover:rounded-xl text-white font-condensed font-semibold"
        >
          CONTACT
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 hover:bg-slate-900 hover:rounded-xl text-white font-condensed font-semibold"
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
