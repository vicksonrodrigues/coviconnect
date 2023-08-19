import React from "react";
import { ScrollRestoration, Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import BottomNavBar from "../features/navBar/BottomNavBar";

const Layout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <BottomNavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
