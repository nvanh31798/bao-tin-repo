import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchFormFaceAsync } from "../../redux/slice/productFilterSlice/productsFilterSlice";

export const FormFaceFilter = () => {
  const formList = useAppSelector((state) => state.productsFilter.formface);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFormFaceAsync());
  }, []);

  console.log("formList", formList);
  return (
    <div className="grid grid-cols-3 py-5 justify-center gap-10 text-center">
      {formList &&
        formList.map((form) => {
          return (
            <div className="hover:cursor-pointer hover:text-blue-500 uppercase">
              <div className="border-2 hover:border-blue-500 overflow-hidden w-56 h-56">
                <img
                  className="w-44 m-auto h-auto"
                  src={form.image}
                  alt={form.name}
                />
              </div>
              <div className="my-2 rounded-lg m-auto text-md hover:scale-105">
                {form.name}
              </div>
            </div>
          );
        })}
    </div>
  );
};
