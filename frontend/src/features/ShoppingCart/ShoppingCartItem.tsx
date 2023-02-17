import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { useAppSelector } from "../../redux/hooks";

export const ShoppingCartItem = () => {
  const [NumberOfProductsOrdered, setNumberOfProductsOrdered] = useState(1);
  const productsOrdered = useAppSelector(
    (state) => state.shoppingCart.productsOrdered
  );
  const orderedSet = new Set(productsOrdered);
  const renderProductOrdersLsite = Array.from(orderedSet);
  const calculateNumberOfOrderedProducts = (productId: any) => {
    const productAmount = productsOrdered?.filter(
      (product) => product.id === productId
    ).length;
    return productAmount;
  };
  const renderOrderedItems = () => {
    return !!renderProductOrdersLsite ? (
      renderProductOrdersLsite.map((product) => {
        return (
          <div className="flex">
            <div className="w-2/3 p-2">
              <div className="text-md py-2 font-bold">
                <Typography
                  className="truncate font-bold"
                  fontWeight={"600"}
                  fontSize={"inherit"}
                  variant="h6"
                >
                  {product.name}
                </Typography>
              </div>
              <div>
                <NumericFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <div className="flex  text-center">
                <p>Amount:</p>
                <input
                  value={calculateNumberOfOrderedProducts(product.id)}
                  className="mx-5 text-center w-1/4"
                ></input>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <></>
    );
  };
  return <div>{renderOrderedItems()}</div>;
};
