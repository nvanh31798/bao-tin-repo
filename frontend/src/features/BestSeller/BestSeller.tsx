import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  loadingState,
  productFetchAsync,
} from "../../redux/slice/productSlice/productSlice";
import { Card } from "../Card/Card";

export const BestSeller = () => {
  const getLoadingState = useAppSelector(loadingState);
  const [isShowAllBestSellerProd, setIsShowAllBestSellerProd] = useState(false);
  const bestProds = useAppSelector((state) => state.product.bestSellerProds);
  const dispatch = useAppDispatch();

  const handleMoreBestSellerProds = () => {
    setIsShowAllBestSellerProd(!isShowAllBestSellerProd);
  };
  useEffect(() => {
    dispatch(productFetchAsync());
  }, []);

  return (
    <div>
      <div className="md:p-2 gap-5 text-center justify-items-center grid">
        <p className="tracking-widest md:p-2 text-xl text-orange-500">
          SPECIAL OFFER
        </p>
        <p className="p-5 text-[#1E90FF] font-bold text-2xl md:text-5xl">
          BEST SELLER
        </p>
        <p className="text-center w-2/4 font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam libero
          rem nostrum voluptatum nemo, nihil corporis voluptas ad esse incidunt
          sit sunt recusandae, qui fuga obcaecati autem. Deserunt, soluta
          officiis!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 p-5">
        {bestProds &&
          bestProds
            .slice(
              0,
              !isShowAllBestSellerProd
                ? 4
                : bestProds.length > 8
                ? bestProds.length
                : 8
            )
            .map((prod) => {
              return <Card {...prod} />;
            })}
      </div>
      <p
        onClick={handleMoreBestSellerProds}
        className="text-center cursor-pointer text-sm py-10 font-thin"
      >
        {!isShowAllBestSellerProd ? "XEM THÊM" : "Ẩn"}
      </p>
    </div>
  );
};
