import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const DaysWeek = () => {
  //bg-[#889AB6]  bg-opacity-15
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const prevSixDays = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - 6
      )
    );
  };

  const nextSixDays = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 6
      )
    );
  };

  const getStartOfWeek = (date) => {
    const dayIndex = date.getDay();
    const difference = dayIndex > 0 ? dayIndex - 1 : 6; // Adjust to skip Sunday
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - difference
    );
  };

  const calendarStart = getStartOfWeek(currentDate);
  const calendarDays = [];
  for (let i = 0; i < 6; i++) {
    const date = new Date(
      calendarStart.getFullYear(),
      calendarStart.getMonth(),
      calendarStart.getDate() + i
    );
    calendarDays.push(date);
  }

  return (
    <div className=" mt-8 items-center ml-[165px] flex gap-4 h-[50px] md:w-[549px] w-full">
      <h2 className="text-lg font-bold text-text_colour">
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h2>

      <div className="flex gap-2">
        <button onClick={prevSixDays} className="text-lg font-bold text-text_colour">
        <IoIosArrowBack />
        </button>
        <div className="grid grid-cols-6">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`text-center font-normal text-text_colour rounded-md rounded-b-none px-2 ${
                calendarDays[index].toDateString() ===
                currentDate.toDateString()
                  ? "bg-white"
                  : ""
              }`}
            >
              {day}
            </div>
          ))}
          {calendarDays.map((date) => (
            <div
              key={date.toISOString()}
              className={`text-center text-text_colour font-bold rounded-md rounded-t-none px-2 ${
                date.toDateString() === currentDate.toDateString()
                  ? "bg-white"
                  : ""
              }`}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
        <button onClick={nextSixDays} className="text-lg font-bold text-text_colour">
        <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default DaysWeek;
