import { Dialog, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GenderFilter } from "./GenderFilter";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { FormFaceFilter } from "./FormFaceFilter";

export const ProductFilter = () => {
  useEffect(() => {}, []);

  const steps = [
    {
      title: "Giới Tính",
      body: <GenderFilter></GenderFilter>,
    },
    {
      title: "Giới Tính",
      body: <FormFaceFilter></FormFaceFilter>,
    },
    {
      title: "Giới Tính",
      body: <div>Gong kinh</div>,
    },
    {
      title: "Giới Tính",
      body: <div>Chat lieu gong</div>,
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

  const renderFilterComponent = (currentStep: number) => {
    return <div className="mx-auto">{steps[currentStep].body}</div>;
  };
  const handleCloseModal = () => {
    setIsOpenFilterModal(false);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => {
      if (prev === steps.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="text-center">
      <p
        onClick={() => {
          setIsOpenFilterModal(true);
        }}
        className="p-5 text-2xl hover:cursor-pointer hover:scale-105"
      >
        Chọn Kính Phù Hợp {">>"}
      </p>
      <p className="text-center p-5 md:w-1/4 m-auto text-md font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quasi maiores dolore sapiente ducimus cupiditate assumenda? Odio
        expedita, et voluptatibus saepe debitis fugiat ad esse praesentium
        corrupti molestiae dolorum iusto!
      </p>

      <Dialog className="" open={isOpenFilterModal} fullScreen>
        <div
          onClick={handleCloseModal}
          className="absolute right-5 top-1 text-blue-700 uppercase hover:cursor-pointer"
        >
          x
        </div>
        <Stepper className="p-10" alternativeLabel activeStep={currentStep}>
          <Step key={"Giới Tính"}>
            <StepLabel>{"Giới Tính"}</StepLabel>
          </Step>
          <Step key={"Khuôn mặt"}>
            <StepLabel>{"Khuôn mặt"}</StepLabel>
          </Step>
          <Step key={"Gọng kính"}>
            <StepLabel>{"Gọng kính"}</StepLabel>
          </Step>
          <Step key={"Chất liệu gọng"}>
            <StepLabel>{"Chất liệu gọng"}</StepLabel>
          </Step>
        </Stepper>
        {renderFilterComponent(currentStep)}
        <div className="gap-5 flex absolute bottom-10 text-blue-400 left-1/2 -translate-x-1/2">
          {currentStep === steps.length - 1 ? (
            <>
              <div
                onClick={handlePrevStep}
                className="p-2 hover:cursor-pointer font-bold"
              >
                <KeyboardArrowLeftIcon />
              </div>
              <div className="border-2 p-2 text-center w-40 rounded-2xl hover:cursor-pointer text-white hover:bg-white bg-blue-500 hover:text-blue-500 font-bold hover:border-blue-500">
                Search
              </div>
              <div
                onClick={handleNextStep}
                className="p-2 hover:cursor-pointer font-bold invisible "
              >
                <KeyboardArrowLeftIcon />
              </div>
            </>
          ) : (
            <>
              <div
                onClick={handlePrevStep}
                className={`p-2 hover:cursor-pointer font-bold ${
                  currentStep === 0 ? "invisible" : ""
                }`}
              >
                <KeyboardArrowLeftIcon />
              </div>
              <div
                onClick={handleCloseModal}
                className="border-2 p-2 text-center w-40 rounded-2xl hover:cursor-pointer text-white hover:bg-white bg-red-500 hover:text-red-400 font-bold hover:border-red-500"
              >
                Close
              </div>
              <div
                onClick={handleNextStep}
                className="p-2 hover:cursor-pointer font-bold"
              >
                <KeyboardArrowRightIcon />
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};
