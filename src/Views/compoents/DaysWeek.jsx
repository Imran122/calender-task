import { useState } from "react";

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
    <div className=" mt-8 items-center ml-[146px] flex gap-4 ">
      <h2 className="text-lg font-bold">
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h2>

      <div className="flex gap-4">
        <button onClick={prevSixDays} className="text-lg font-bold">
          &lt;
        </button>
        <div className="grid grid-cols-6 gap-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-bold">
              {day}
            </div>
          ))}
          {calendarDays.map((date) => (
            <div
              key={date.toISOString()}
              className={`text-center p-2 rounded-full ${
                date.toDateString() === currentDate.toDateString()
                  ? "bg-white"
                  : ""
              }`}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
        <button onClick={nextSixDays} className="text-lg font-bold">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DaysWeek;
