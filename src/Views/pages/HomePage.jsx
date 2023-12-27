
import CourtTimeComponent from "../compoents/CourtTImeComponent";
import DaysWeek from "../compoents/DaysWeek";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-12 gap-3">
      {/* Hide the sidebar on small screens */}
      <div className="w-[68px] border fixed h-screen border-r-2 shadow-2xl md:col-span-1 z-[99999] hidden md:block"></div>
      <div className="mb-20   md:col-span-11">
        <DaysWeek />
        <div className="w-full overflow-x-auto mt-12">
          <CourtTimeComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
