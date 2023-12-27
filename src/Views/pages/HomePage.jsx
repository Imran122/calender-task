import CourtTImeComponent from "../compoents/CourtTImeComponent";
import DaysWeek from "../compoents/DaysWeek";

const HomePage = () => {
  //bg-[#889AB6]  bg-opacity-15

  return (
    <div className="grid gird-cols-12 gap-3 ">
    <div className="w-[68px] border fixed h-screen border-r-2 shadow-2xl col-span-1 z-[99999]"></div>
    <div className="mb-20 border border-red-500 col-span-11">
      <DaysWeek />
    <div className="w-[90%] overflow-x-auto">
    <CourtTImeComponent />
    </div>
    </div>
  </div>
  );
};

export default HomePage;
