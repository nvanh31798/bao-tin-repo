import React from "react";
import { Link } from "react-router-dom";
import { RouterList } from "../../../common/Router";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
const NavBar = () => {
  return (
    <div className="hidden md:flex md:justify-between md:p-5 md:px-20 sticky top-0 bg-white z-10 shadow-lg">
      <LeftNav />
      <nav>
        <ul className="flex md:gap-16">
          {RouterList.map((router) => {
            return (
              <li className="uppercase hover:text-blue-400 text-sm md:text-md font-semibold">
                <Link to={router.path}>{router.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <RightNav />
    </div>
  );
};

export default NavBar;
