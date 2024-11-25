import React from "react";
import PrimarySidebar from "./components/Sidebar";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <PrimarySidebar />

      {/* Content Wrapper */}
      <div className="flex flex-col bg-white lg:ml-80 w-full px-5">
        <Header />
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
