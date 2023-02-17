import React from "react";

export const SupperCombo = () => {
  return (
    <div className="overflow-hidden border-2 relative h-96 items-center flex">
      <div
        className={`justify-center bg-no-repeat bg-cover bg-center absolute h-full w-full `}
        style={{
          // backgroundImage: `URL(${Item.image})`,
          backgroundImage: `URL(assets/images/backgroundImages/banner-supper-combo.jpg)`,
        }}
      ></div>
      <div className="mx-5 relative bg-white md:w-4/12 p-10 md:mx-20 rounded-xl shadow-md">
        <span className="text-3xl font-bold uppercase">Supper Combo</span>
        <p className="py-5 font-thin">
          SUPER COMBO là các combo tròng và gọng kính có các thông số mắt đã
          được đo sẵn, combo giúp bạn tiết kiệm chi phí so với mua tròng và gọng
          kính riêng.
        </p>
        <p className="uppercase font-light text-xs text-right">xem thêm</p>
      </div>
    </div>
  );
};
