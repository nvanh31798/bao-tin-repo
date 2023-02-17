import React, { useState } from "react";
import { CommentsList } from "../../CommentsList/CommentsList";
import { ProductList } from "../../ProductsList/ProductsList";
import { InsuranceList } from "../../InsuranceList/InsuranceList";
import { CategoriesList } from "../../../mock/CategoriesList";
import { ProductCategory } from "../../ProductsCategory/ProductCategory";
import { Spinner } from "../../../common/Spinner";
import CustomerSupport from "../../CustomerSupport/CustomerSupport";
import { Promotion } from "../../Promotion/Promotion";
import { SupperCombo } from "../../SupperCombo/SupperCombo";
import { BestSeller } from "../../BestSeller/BestSeller";
import { ProductFilter } from "../../ProductFilter/ProductFilter";

export const HomePage = () => {
  const [isLoading, setisLoading] = useState(false);
  const CategoryList = CategoriesList;
  const bestSaler = () => {
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
            rem nostrum voluptatum nemo, nihil corporis voluptas ad esse
            incidunt sit sunt recusandae, qui fuga obcaecati autem. Deserunt,
            soluta officiis!
          </p>
        </div>
        <div className="p-5 grid md:grid-cols-4 gap-2 content-between">
          <div className="">
            <img src="/assets/images/bestProds/bestProd-1.png" alt="" />
            <div className="text-center">
              <h1 className="font-semibold text-2xl uppercase">Title</h1>
            </div>
            <div className="text-xl">
              <p className="font-semibold">125 000 đ</p>
              <p>red</p>
            </div>
          </div>
          <div className="">
            <img src="/assets/images/bestProds/bestProd-2.png" alt="" />
          </div>
          <div className="">
            <img src="/assets/images/bestProds/bestProd-3.png" alt="" />
          </div>
          <div className="">
            <img src="/assets/images/bestProds/bestProd-1.png" alt="" />
          </div>
        </div>
        <p className="text-center cursor-pointer text-sm font-thin">XEM THÊM</p>
      </div>
    );
  };

  const centerContent = () => {
    return (
      <div className="text-center">
        <div className="p-2 gap-5">
          <p className="tracking-widest font-semibold p-2 text-sm md:text-2xl bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 text-transparent">
            Chương trình ưu đãi
          </p>
          <p className="p-2 text-xl md:text-8xl bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#5da8f3] text-transparent">
            Sale Up To 50%
          </p>
        </div>
      </div>
    );
  };
  const productsList = () => {
    return (
      <div className="p-5">
        <div className="p-2 gap-5">
          <p className="md:p-5 text-stone-500 font-bold text-2xl md:text-5xl">
            NEW ARRIVED
          </p>
        </div>
        <ProductList />
      </div>
    );
  };
  const commentsList = () => {
    return (
      <div className="p5">
        <div className="p-2 gap-5 text-center justify-items-center grid">
          <p className="p-2 text-[#1E90FF] font-bold text-2xl md:text-5xl">
            FEEDBACK
          </p>
        </div>
        <CommentsList />
      </div>
    );
  };
  const insuranceList = () => {
    return (
      <div className="p-5">
        <div className="p-2 gap-5 text-center justify-items-center grid "></div>
        <CustomerSupport />
      </div>
    );
  };

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-sky-500/50 bg-[url('/assets/images/backgroundImages/bg-img-1.jpeg')] border-solid bg-center bg-opacity-70 overflow-hidden justify-center gap-32 flex h-screen">
        {/* <div className="self-center">{centerContent()}</div> */}
      </div>
      {isLoading && <Spinner />}
      {/* {bestSaler()} */}
      <BestSeller />
      <ProductFilter />
      <ProductCategory />
      {commentsList()}
      <SupperCombo />
      {insuranceList()}
      <Promotion />
    </div>
  );
};
