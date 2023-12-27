import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CourtTimeComponent = () => {
  const courts = Array.from({ length: 11 }, (_, index) => index + 1);
  const hours = Array.from({ length: 17 }, (_, index) => index + 8);

  const handleCellClick = (court, hour) => {
    // Handle the click event for the selected cell (court, hour)
    console.log(`Selected: Court ${court}, ${hour}:00`);
  };

  return (
    <div className="ml-2 md:ml-[67px] overflow-x-auto">
      <table className="w-full md:min-w-[1520px] border-collapse ">
        <thead>
          <tr className="">
            <th className="md:py-8"></th>
            {courts.map((court, index) => (
              <th
                key={court}
                className={`text-center font-bold border border-t-0 border-gray-300 bg-[#FFFFFF] ${
                  index === 0 ? "border-l-0" : ""
                } ${index === courts.length - 1 ? "border-r-0" : ""}`}
              >
                {index === 0 && (
                  <span className="text-gray-500">
                    <IoIosArrowBack />
                  </span>
                )}
                Court {court}
                {index === courts.length - 1 && (
                  <span className="text-gray-500">
                    <IoIosArrowForward />
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour} className="">
              <td className="py-4 md:py-8 text-center whitespace-nowrap">{`${hour}:00`}</td>
              {courts.map((court, index) => (
                <td
                  key={court}
                  className={`text-center font-bold border border-t-0 border-gray-300 relative bg-[#FFFFFF] ${
                    index === 0 ? "border-l-0" : ""
                  } ${index === courts.length - 1 ? "border-r-0" : ""}`}
                >
                  <div className="h-0.5 bg-slate-100 absolute w-full bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourtTimeComponent;
