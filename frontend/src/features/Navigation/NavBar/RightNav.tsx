import React, { useEffect, useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RouterList } from "../../../common/Router";
import { ShoppingCart } from "../../ShoppingCart/ShoppingCart";
import { useCickOutside } from "../../../hooks/useClickOutside";
import { useAppSelector } from "../../../redux/hooks";

const RightNav = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const wrapperRef = useRef(null);
  const isClickOutside = useCickOutside(wrapperRef);
  const productsOrdered = useAppSelector(
    (state) => state.shoppingCart.productsOrdered
  );
  useEffect(() => {
    if (isClickOutside) {
      console.log("Clicked outside");
      setIsOpenCart(false);
    }
  }, [isClickOutside]);

  const triggerShoppingcard = () => {
    setIsOpenCart(!isOpenCart);
  };
  return (
    <div className="invisible md:visible md:flex md:gap-5">
      <div className="flex gap-5">
        <GrSearch size={20} />
        <div
          className="flex hover:cursor-pointer"
          onClick={triggerShoppingcard}
        >
          <FiShoppingCart size={20} />
          <span className="absolute px-6 text-red-500 font-bold text-xs">
            {!!productsOrdered?.length && productsOrdered.length}
          </span>
        </div>
        {isOpenCart ? <ShoppingCart ref={wrapperRef} /> : <></>}
      </div>
    </div>
  );
};

export default RightNav;
