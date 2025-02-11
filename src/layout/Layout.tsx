import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/global-components/Header";
import Footer from "../components/global-components/Footer";
import Banner from "../components/global-components/Banner";
const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
