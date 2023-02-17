import { Box } from "@mui/material";
import { NumericFormat } from "react-number-format";
import FormControl from "@mui/material/FormControl";
import { ProductModel } from "../../models/product";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addMoreProduct } from "../../redux/slice/shoppingCartSlice/shoppingCartSlice";

export const Card = (card: ProductModel, { ...props }) => {
  const navigate = useNavigate();
  const [currentColor, setCurrentColor] = useState("blue");
  const dispatch = useAppDispatch();
  const gotoProductsDetailsPage = () => {
    navigate(`/Product/${card.id}`);
  };
  const handleAddToBag = () => {
    console.log("click to add");
    dispatch(addMoreProduct(card));
  };

  const RadioButtonsGroup = (colorList: any) => {
    const handleColorClick = (e: any) => {
      setCurrentColor(e.target.innerText);
    };

    return (
      <FormControl>
        <div className="flex py-2">
          {colorList &&
            colorList.map((color: string, index: number) => {
              if (index > 0) {
                return (
                  <div
                    onClick={(e) => handleColorClick(e)}
                    className={`p-2 px-5 border-2 text-center ml-1 ${
                      currentColor === color
                        ? "border-blue-500 text-blue-500"
                        : ""
                    }`}
                  >
                    {color}
                  </div>
                );
              }
              return (
                <div
                  onClick={(e) => handleColorClick(e)}
                  className={`p-2 px-5 border-2 text-center ${
                    currentColor === color
                      ? "border-blue-500 text-blue-500"
                      : ""
                  }`}
                >
                  {color}
                </div>
              );
            })}
        </div>
      </FormControl>
    );
  };

  return (
    <div className="hover:cursor-pointer p-5 py-5 m-auto md:w-full overflow-hidden shadow-xl rounded-2xl">
      <div className="overflow-hidden">
        <Box
          onClick={gotoProductsDetailsPage}
          className="m-auto overflow-hidden"
          component="img"
          sx={{
            height: 400,
            maxHeight: { xs: 300, md: 400 },
            maxWidth: { xs: 300, md: 500 },
          }}
          alt="The house from the offer."
          src={card.image}
        ></Box>
      </div>
      <div className="break-before-all py-2 flex justify-between">
        <div className="p-2">
          <div>
            <span className="break-all text-lg truncate w-1/2">
              {card.name}
            </span>
          </div>
          {/* <div>{RadioButtonsGroup(["red", "blue"])}</div> */}
        </div>
        <div className="font-thin text-xs md:text-lg p-2">
          <NumericFormat
            value={card.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
      <div
        onClick={handleAddToBag}
        className={`uppercase p-2 text-center w-5/6 m-auto bg-gradient-to-r from-[#1E90FF] to-[#0b7def] text-white font-semibold rounded-xl`}
      >
        <span className="">Add to bag</span>
      </div>
    </div>
  );
};
