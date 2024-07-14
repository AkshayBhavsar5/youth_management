import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Dashboard />
    </>
  );
}

export default Layout;
