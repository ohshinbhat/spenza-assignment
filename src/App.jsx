import React from "react";
import MapComponent from "./components/MapComponent";

const App = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-[20px] md:text-[40px]  bg-myblue w-full text-center text-white font-bold">
          Network Map
        </div>
        <div className="text-[14px] md:text-[16px] px-[25px] md:px-[100px]">
          Welcome to our Interactive Network Map Tool! This user-friendly
          platform allows you to visualize and explore network connections in
          real-time. Hover over individual nodes for detailed information, and
          click to expand or collapse connections for better clarity. Use the
          zoom feature to navigate through complex networks seamlessly. Whether
          for educational purposes, network management, or presentations, this
          tool provides an intuitive way to understand and analyze network
          structures effectively.
        </div>
        <div className="pb-10">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
