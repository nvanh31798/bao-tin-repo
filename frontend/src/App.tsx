import React, { useEffect } from "react";
import { TopBar, NavBar } from "./features/Navigation";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  categoryFetchAsync,
  isLoading,
} from "./redux/slice/categorySlice/categorySlice";
import { Footer } from "./features/Footer/Footer";
import { Divider } from "@mui/material";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(categoryFetchAsync());
  }, []);
  return (
    <>
      <TopBar />
      <NavBar />
      <Outlet />
      {/* <Divider color={"#efebe9"} /> */}
      <div className="mt-10">
        <Divider className="font-extralight" color={"inherit"}>
          ABOUT BAO TIN STORE
        </Divider>
        <Footer />
      </div>
    </>
  );
}

export default App;
