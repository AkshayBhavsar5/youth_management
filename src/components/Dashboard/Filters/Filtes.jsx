import React, { useState } from "react";

import Select from "react-select"; // Import react-select
const Filtes = () => {
  const filters = ["Weekly", "Monthly", "Yearly"];
  const place = ["Home", "Outside"];
  const [filter, setFilter] = useState();

  return (
    <>
      <div className="flex justify-start items-center">
        <div className="px-10">
          <label htmlFor="" className="text-2xl">
            <b>Select type:</b>
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {filters.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mx-40">
          <label htmlFor="" className="text-2xl">
            <b>Place:</b>
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {place.map((plc, index) => (
              <option value={plc} key={index}>
                {plc}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filtes;
