import React from "react";
import NavbarTemplete from "./components/Navbar/Navbar";
import FooterTemplete from "./components/footer/Footer";

const layout = ({ children }) => {
  return (
    <div className="bg-white">
      <NavbarTemplete />
      <div>{children}</div>
      <FooterTemplete />
    </div>
  );
};

export default layout;
