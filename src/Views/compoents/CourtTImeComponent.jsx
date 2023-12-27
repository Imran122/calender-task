import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CourtTimeComponent = () => {
  const courts = Array.from({ length: 12 }, (_, index) => index + 1);
  const hours = Array.from({ length: 17 }, (_, index) => index + 8);

  // Example: Events data structure
  const events = {
    "8:00": { court2: "Imran" },
    "9:00": { court3: "John" },
    // Add more events as needed
  };

  const getEventInfo = (hour, court) => {
    const formattedHour = `${hour < 7 ? "0" : ""}${hour}:00`; // Format hour as "08:00", "09:00", etc.

    const eventKey = formattedHour;
    return events[eventKey] && events[eventKey][`court${court}`];
  };

  return (
    <div className="ml-2 md:ml-[67px] md:min-w-[1520px] ">
      <table className="w-full  h-[870px] border-collapse">
        <thead>
          <tr className="">
            <th className="md:py-8"></th>
            {courts.map((court, index) => (
              <th
                key={court}
                className={`text-center font-bold border border-t-0 border-gray-300 bg-[#FFFFFF] whitespace-nowrap ${
                  index === 0 ? "border-l-0 rounded-md" : ""
                } ${
                  index === courts.length - 1 ? "border-r-0 rounded-md" : ""
                }`}
              >
                <div className="flex items-center text-text_normal gap-3 justify-center">
                  {index === 0 && (
                    <span className="text-text_normal text-start">
                      <IoIosArrowBack />
                    </span>
                  )}
                  Court {court}
                  {index === courts.length - 1 && (
                    <span className="text-text_normal">
                      <IoIosArrowForward />
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour} className="">
              <td className="py-4 md:py-8 text-center text-text_normal whitespace-nowrap ">
                {`${hour < 10 ? "0" : ""}${hour}:00`}
              </td>
              {courts.map((court, index) => (
                <td
                  key={court}
                  className={` text-text_normal border border-t-0 border-gray-300 relative bg-[#FFFFFF] ${
                    index === 0 ? "border-l-0" : ""
                  } ${index === courts.length - 1 ? "border-r-0" : ""}`}
                >
                  <div className="z-10 h-0.5 bg-slate-100 absolute w-full bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  
                 {/*  {index === 5 && (
                    <div className="z-10 h-0.5 bg-red-500 absolute w-full bottom-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  )} */}
                  {getEventInfo(hour, court) && (
                    <div
                      className={`${
                        getEventInfo(hour, court) === "Imran"
                          ? "custom-border"
                          : ""
                      } z-50  absolute top-1/2 -translate-y-1/2 md:h-16 custom-event grid md:grid-cols-5  w-full h-12 md:py-2  bg-[#e8eaf0]`}
                      style={{
                        borderLeft: `4px solid ${
                          getEventInfo(hour, court) === "Imran"
                            ? "linear-gradient(to bottom, #FFD700 50%, #FF0000 50%)"
                            : "#FF0000"
                        }`,
                      }}
                    >
                      <div className="flex flex-col col-span-4 w-full md:text-base text-xs">
                        <div className=" text-text_normal font-[12px] text-[12px]">
                          {`${hour < 7 ? "0" : ""}${hour}:00 - ${
                            hour + 1 < 7 ? "0" : ""
                          }${hour + 1}:00`}
                        </div>
                        <div className=" text-[#7E93FF] font-bold  text-[14px]">
                          {getEventInfo(hour, court)}
                        </div>
                      </div>
                      <div className="col-span-1 mt-6">
                        <p className="text-[#7E93FF] font-bold text-[7px]">
                          2/3
                        </p>
                      </div>
                    </div>
                  )}
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
