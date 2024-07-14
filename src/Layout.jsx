import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import BarChat from "./components/BarChat/BarChat";
import Filtes from "./components/Dashboard/Filters/Filtes";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
