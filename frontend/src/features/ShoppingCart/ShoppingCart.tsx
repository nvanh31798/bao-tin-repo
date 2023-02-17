import { Divider, Typography } from "@mui/material";
import { ShoppingCartItem } from "./ShoppingCartItem";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

export const ShoppingCart = React.forwardRef((props, ref: any) => {
  const productsOrdered = useAppSelector(
    (state) => state.shoppingCart.productsOrdered
  );
  return (
    <div
      ref={ref}
      className="gap-5 absolute top-12 right-5 border-2  bg-white rounded-lg w-96 p-10"
    >
      <div className="p-5">
        <Typography variant="h5" color="GrayText">
          Your Bag
        </Typography>
      </div>
      <div className="h-60 w-11/12 m-auto p-2 overflow-auto ">
        <ShoppingCartItem />
        <Divider />
      </div>
      <div className="py-5">Order Sumary</div>
      <Divider />
      <div className="py-5">
        <Typography variant="h5" color="GrayText">
          Total:
        </Typography>
        <div className="p-2 m-5 hover:cursor-pointer text-white text-center rounded-xl bg-blue-500 hover:text-blue-500 hover:bg-white border-blue-500 border-2">
          Order
        </div>
      </div>
    </div>
  );
});
