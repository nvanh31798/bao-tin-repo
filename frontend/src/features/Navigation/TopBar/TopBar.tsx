import React, { useEffect, useRef, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Authentication } from "../../Authentication/Authentication";
import { Menu } from "@mui/icons-material";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  checkValidTokenAsync,
  isAuthenticated,
  logout,
} from "../../../redux/slice/authenticationSlice/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import { useCickOutside } from "../../../hooks/useClickOutside";
import { useAppDispatch } from "../../../redux/hooks";

const TopBar = () => {
  const wrapperRef = useRef(null);
  const isClickOutside = useCickOutside(wrapperRef);
  const isAuth = useAppSelector(isAuthenticated);
  const [isOpenAuthentication, setIsOpenAuthentication] = useState(false);
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.authentication.userName);
  useEffect(() => {
    if (isClickOutside) {
      setIsOpenAuthentication(false);
    }
  }, [isClickOutside]);

  useEffect(() => {
    dispatch(checkValidTokenAsync());
  }, []);

  const triggerAuthentication = () => {
    setIsOpenAuthentication(!isOpenAuthentication);
  };
  const handleLogout = () => {
    dispatch(logout());
    setIsOpenAuthentication(true);
  };

  return (
    <div className="fixed md:static w-full z-10">
      <div className="hidden md:flex justify-between p-2 font-light bg-[#1E90FF] text-white">
        <div className="flex justify-between gap-2 p-2">
          <div className="p-1">
            <BsTelephone />
          </div>
          <span>Call Us: 0983 523 067</span>
        </div>
        <Link to="/" className="p-2 px-8 font-mono">
          Bao Tin Store
        </Link>
        <div ref={wrapperRef} className="flex gap-2 p-1 px-8">
          {isAuth ? (
            <div className="flex gap-2 p-1 px-8">
              <span>Hi! {userName},</span>
              <span
                className="hover:cursor-pointer hover:font-bold"
                onClick={handleLogout}
              >
                Log out
              </span>
            </div>
          ) : (
            <div
              className="flex gap-2 p-1 px-8"
              onClick={triggerAuthentication}
            >
              <span className="p-1">
                <AiOutlineUser size={18} />
              </span>
              <span className="hover:cursor-pointer hover:font-bold">
                Log in
              </span>
            </div>
          )}
          {isOpenAuthentication && !isAuth && (
            <div className="absolute bg-opacity-90 bg-stone-200 z-50 p-5 m-10 right-5">
              <Authentication />
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden flex justify-between p-2 px-2 font-light bg-[#1E90FF] text-white">
        <div className="">
          <Menu></Menu>
        </div>
        <div className="font-mono font-sm">BAO TIN STORE</div>
        <div className="flex py-1">
          <FiShoppingCart size={16} />
          <span className="absolute top-0.5 right-1 text-red-500 font-bold text-xs">
            12
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
