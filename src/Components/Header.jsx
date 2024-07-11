import React from "react";

const Header = ({setOpen}) => {
  return (
    <div className=" w-[100vw] h-[200px] bg-blue-950 text-white flex 

     sm:justify-around sm:items-center  sm:flex-wrap flex-col sm:flex-row items-center  pt-2 sm:pt-0">
      <h1 className="text-3xl   font-medium">Open Job Listing</h1>
      <button onClick={()=>setOpen(true)} className="sm:px-4 px-4 py-2 bg-cyan-500 
      font-medium rounded-md cursor-pointer sm:w-[10%]">
        Post a job
      </button>
    </div>
  );
};

export default Header;
