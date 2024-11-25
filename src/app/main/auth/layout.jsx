import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="lg:w-1/2 w-full">{children}</div>

      <div className="md:w-1/2 w-full hidden md:block" data-aos="fade-left">
        <video
          src="/videos/Hand showing Auto App.mp4" // Replace with the path to your video file
          className="w-full h-full rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          aria-label="Video of a hand showing an auto app" // Accessibility improvement
        />
      </div>
    </div>
  );
};

export default Layout;
