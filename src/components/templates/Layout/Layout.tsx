import React from "react";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../../molecules/Header/Nav";

export const Layout = () => {
  return (
    <div className="background pt-20">
      <Navbar/>
      {/* <Header /> */}
      <Outlet/>
      <Footer />
    </div>
  );
};
