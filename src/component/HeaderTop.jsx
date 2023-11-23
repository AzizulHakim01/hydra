import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderTop = () => {
  return (
    <div className="w-full">
      <div className="md:w-[1152px] mx-auto flex md:flex-row flex-col justify-between items-center  md:h-[50px] ">
        <div className="">
          <p>Welcome to Hydra - Global Empires</p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 items-center">
          <p><FontAwesomeIcon icon={faPhone} /> 1-929-462-7184</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> support@hydraglobalempire.com</p>
          <span className="hidden md:block">|</span>
          <span className="cursor-pointer"><FontAwesomeIcon icon={faCartShopping}/> 0</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
