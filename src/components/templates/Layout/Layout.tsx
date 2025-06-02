import React from "react";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="bg-[#f5f6fa]">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
