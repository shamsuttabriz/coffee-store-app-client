import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
