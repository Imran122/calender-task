import CourtTImeComponent from "../compoents/CourtTImeComponent";
import DaysWeek from "../compoents/DaysWeek";

const HomePage = () => {
  //bg-[#889AB6]  bg-opacity-15

  return (
    <div className="grid grid-cols-12 gap-3 ">
    <div className="w-[68px] border h-screen fixed border-r-2 shadow-2xl col-span-1"></div>
    <div className="col-span-11 w-full flex flex-col gap-20 top-[50px] mb-20">
      <DaysWeek />
      <CourtTImeComponent />
    </div>
  </div>
  );
};

export default HomePage;
