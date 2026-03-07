import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <div className="app-shell">
      <Header
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <div className="main-and-sidebar-wrapper">
        <Sidebar sidebarIsOpen={sidebarOpen} />
        <main className="content-area">
          <Outlet />
          <TanStackRouterDevtools />
        </main>
      </div>
    </div>
  );
}

export default Layout;
