import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-white sm:w-[60vw]  w-[100vw]   sm:h-24 h-1/4 py-2   shadow-md rounded-md">
      <form className=" flex flex-col sm:flex-row gap-3 justify-around items-center py-3">
        <select
          defaultValue="full time"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md
           focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 text-xl
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[30%] w-1/2"
        >
          <option value="full time">Full time</option>
          <option value="part time">Part time</option>
        </select>

        <select
          defaultValue="full time"
          className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-md
           focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 text-xl
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[30%] w-1/2"
        >
          <option value="remot">Remote</option>
          <option value="in-office">In-office</option>
        </select>

        <button type="submit" className="sm:w-[30%] w-1/2 px-4 py-2 bg-cyan-500 font-medium rounded-md cursor-pointer">Search</button>

      </form>
    </div>
  );
};

export default SearchBar;
