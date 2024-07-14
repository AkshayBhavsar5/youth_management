import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Filtes from "./components/Dashboard/Filters/Filtes";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Filtes />
      <Dashboard />
    </>
  );
}

export default Layout;
