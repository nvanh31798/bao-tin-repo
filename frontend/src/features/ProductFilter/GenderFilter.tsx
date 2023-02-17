import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGenderAsync } from "../../redux/slice/productFilterSlice/productsFilterSlice";

export const GenderFilter = () => {
  const genderList = useAppSelector((state) => state.productsFilter.genders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGenderAsync());
  }, []);

  return (
    <div className="flex py-5 justify-center gap-5 text-center">
      {genderList &&
        genderList.map((gender) => {
          return (
            <div className="hover:cursor-pointer hover:text-blue-500 uppercase">
              <div className="border-2 hover:border-blue-500 overflow-hidden w-56 h-56">
                <img className="w-full h-auto" src={gender.image} alt={gender.name} />
              </div>
              <div className="my-2 rounded-lg m-auto text-md hover:scale-105">{gender.name}</div>
            </div>
          );
        })}
    </div>
  );
};
