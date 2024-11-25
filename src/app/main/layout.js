import React from "react";
import Navbar from "../../components/core/Navbar";
import Footer from "../../components/core/Footer";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
