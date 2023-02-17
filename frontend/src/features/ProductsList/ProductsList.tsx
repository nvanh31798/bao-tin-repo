import React, { useEffect, useState } from "react";
// import { productList } from "../../mock/ProductsList";
import { Card } from "../Card/Card";
import { CarouselCustom } from "../../shareComponent/Carousel";
import {
  productFetchAsync,
  loadingState,
} from "../../redux/slice/productSlice/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Spinner } from "../../common/Spinner";

export const ProductList = () => {
  const getLoadingState = useAppSelector(loadingState);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(productFetchAsync());
  }, []);

  useEffect(() => {
    if (getLoadingState !== "fullfilled" || "loading" || "failed") {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
  }, [getLoadingState]);

  return (
    <div className="snap-x">
      {!isLoading ? (
        <CarouselCustom startSpace="65%" className="p-2 gap-5">
          {productList &&
            productList.map((prod) => {
              return <Card {...prod} />;
            })}
        </CarouselCustom>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
