import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../common/Spinner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProductByIdAsync } from "../../redux/slice/productSlice/productSlice";
import { addMoreProduct } from "../../redux/slice/shoppingCartSlice/shoppingCartSlice";

export const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setisLoading] = useState(false);
  const loadingStatus = useAppSelector((state) => state.product.status);
  const handleAddToBag = () => {
    dispatch(addMoreProduct(selectedProducts));
  };
  const selectedProducts = useAppSelector(
    (state) => state.product.selectedProduct
  );
  const getParams = useParams();

  useEffect(() => {
    if (loadingStatus === "loading") {
      setisLoading(true);
      return;
    }
    if (loadingStatus === "fullfilled") {
      setisLoading(false);
      console.log("selectedProducts", selectedProducts);
      return;
    }
    dispatch(getProductByIdAsync(Number(getParams.id)));
  }, [loadingStatus]);

  useEffect(() => {
    if (!getParams.id) return;
    dispatch(getProductByIdAsync(Number(getParams.id)));
  }, [getParams.id]);

  const priceCalculator = () => {
    const priceFormatted = selectedProducts?.price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    return priceFormatted;
  };

  return (
    <div className="h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="md:flex p-20">
          <div className="w-1/2 grid grid-cols-4 grid-flow-col grid-rows-5 gap-2">
            <div className="col-span-4 row-span-4">
              <img src={selectedProducts?.image} />
            </div>
          </div>
          <div className="px-20 w-1/2">
            <p className="uppercase font-semibold text-lg">
              {selectedProducts?.name}
            </p>
            <div className="grid grid-cols-2">
              <div className="">
                <div>
                  <p className="uppercase py-5">Màu Sắc:</p>
                </div>
                <div>
                  <p className="uppercase">Số Lượng:</p>
                </div>
                <div>
                  <p className="uppercase py-5">Price:</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="py-5">Đỏ</p>
                </div>
                <div className="flex">
                  <p className="uppercase">1</p>
                </div>
                <div>
                  <p className="py-5">{priceCalculator()}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleAddToBag()}
              className="uppercase mt-5 p-2 w-full bg-gradient-to-r from-[#ff871e] to-[#df5414] text-white font-semibold rounded-xl"
            >
              Thêm Vào Giỏ Hàng
            </button>
            {/* <button className="uppercase mt-5 p-2 w-full bg-gradient-to-r from-[#1E90FF] to-[#0978e6] text-white font-semibold rounded-xl">
              Mua ngay
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};
