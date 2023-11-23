import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full">
      <div className="md:w-[1152px] px-2 md:px-0 mx-auto flex justify-between items-center  h-[80px]">
        {/* <img src="./logo_2.png" alt="logo" className="w-auto h-16" /> */}
        <h1 className="text-5xl">Hydra <span className="text-lg">Global Empire</span></h1>
        <FontAwesomeIcon icon={faBars} className="md:hidden text-5xl text-red-500 cursor-pointer" onClick={()=>setShowMenu(!showMenu)}/>
        <div className={`cursor-pointer text-2xl md:flex gap-5 items-center text-gray-900 ${showMenu?"flex flex-col absolute left-0 top-52 text-white p-2 bg-slate-900 w-full":"hidden"}`}>
          <span className="uppercase">Buy Data</span>
          <span className="uppercase">Leads</span>
          <span className="uppercase">about</span>
          <span className={`uppercase bg-red-600 text-white px-4 py-2 ${showMenu?"w-full text-center":""}`}>
            Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
