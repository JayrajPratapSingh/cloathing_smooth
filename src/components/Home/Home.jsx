import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home_page flex flex-col items-center py-2 px-8">
      {/* //first menu */}

      <div className="w-full flex flex-wrap justify-between py-2">
        <div className="w-[30%] h-60 flex flex-auto felx-1 items-center justify-center border-2 border-solid border-black mx-2 ">
          <div className=" w-[28%] h-20 border-solid border-2 border-black flex flex-col items-center justify-center ">
            <h1>HATS</h1>
            <h4>SHOP NOW</h4>
          </div>
        </div>
        <div className="w-[30%] h-60 flex flex-auto felx-1 items-center justify-center border-2 border-solid border-black mx-2 ">
          <div className=" w-[28%] h-20 border-solid border-2 border-black flex flex-col items-center justify-center ">
            <h1>JACKET</h1>
            <h4>SHOP NOW</h4>
          </div>
        </div>
        <div className="w-[30%] h-60 flex flex-auto felx-1 items-center justify-center border-2 border-solid border-black mx-2  ">
          <div className=" w-[28%] h-20 border-solid border-2 border-black flex flex-col items-center justify-center ">
            <h1>SNEAKERS</h1>
            <h4>SHOP NOW</h4>
          </div>
        </div>
      </div>

      {/* //second Menu */}

      <div className="w-full flex flex-wrap justify-between">
        <div className="w-[45%] h-80  flex felx-1 flex-auto items-center justify-center border-2 border-solid border-black mx-2 ">
          <div className=" w-[22%] h-20 border-solid border-2 border-black flex flex-col items-center justify-center ">
            <h1>WOMENS</h1>
            <h4>SHOP NOW</h4>
          </div>
        </div>
        <div className="w-[45%] h-80 flex felx-1 flex-auto items-center justify-center border-2 border-solid border-black mx-2 ">
          <div className=" w-[22%] h-20 border-solid border-2 border-black flex flex-col items-center justify-center ">
            <h1>MENS</h1>
            <h4>SHOP NOW</h4>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Home;
