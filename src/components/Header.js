import React from "react";
import vasitiLogo from "../assets/vasitiLogo.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center navtry mx-40 my-5">
      <div className="flex pt-1 logo-name">
        <img
          src={vasitiLogo}
          className="inline-block logo-icon"
          alt=" logo"
        />
      </div>

      <div className="flex justify-between w-5/12">
        <div>
          <p>ABOUT US</p>
        </div>
        <div>
          <p>STORIES</p>
        </div>{" "}
        <div>
          <p>CONTACT</p>
        </div>{" "}
        <div>
          <p>LOG IN</p>
        </div>
        <div>
          <button className="bg-yellow-600 px-4 rounded text-white py-1 text-sm text-center" >SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
