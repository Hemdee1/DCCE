import { useState } from "react";
import ComputerFirstSemester from "./computerFirstSemester";
import ComputerSecondSemester from "./computerSecondSemester";
import CommunicationSecondSemester from "./communicationSecondSemester";
import CommunicationFirstSemester from "./communicationFirstSemester";

const links = ["first semester", "second semester"];
const depts = ["computer engineering", "communication engineering"];

const FifthYear = () => {
  const [sectionSelected, setSectionSelected] = useState("first semester");
  const [deptSelected, setDeptSelected] = useState("computer engineering");

  return (
    <div className="mt-[50px]">
      <h3 className="text-4xl font-bold text-center uppercase">fifth year</h3>

      <div className="mt-[50px] w-full mb-[50px] sm:px-5 left-0 sticky top-[148px] sm:top-[125px] overflow-clip shadow-md sm:shadow-none bg-white sm:bg-transparent shadow-gray-300">
        <div className="bg-white mx-auto max-w-full flex flex-col sm:flex-row border-primary-stroke gap-2 sm:gap-10 w-[900px] justify-between px-10 sm:px-[30px] sm:border sm:rounded-full">
          <div className="flex justify-between gap-2 sm:gap-10">
            {depts.map((dept, index) => (
              <button
                key={index}
                className={`py-3 font-bold text-xs sm:text-sm uppercase border-semantic ${
                  deptSelected === dept
                    ? "border-b-2 text-semantic"
                    : "text-[#222] border-none"
                }`}
                onClick={() => {
                  window.scrollTo({
                    top: window.innerWidth > 640 ? 795 : 570,
                    left: 0,
                    behavior: "smooth",
                  });
                  setDeptSelected(dept);
                }}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="flex justify-between gap-2 sm:gap-10">
            {links.map((link, index) => (
              <button
                key={index}
                className={`py-3 font-bold text-xs sm:text-sm uppercase border-semantic ${
                  sectionSelected === link
                    ? "border-b-2 text-semantic"
                    : "text-[#222] border-none"
                }`}
                onClick={() => {
                  window.scrollTo({
                    top: window.innerWidth > 640 ? 795 : 570,
                    left: 0,
                    behavior: "smooth",
                  });
                  setSectionSelected(link);
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {deptSelected === "computer engineering" &&
        sectionSelected === "first semester" ? (
          <ComputerFirstSemester />
        ) : deptSelected === "computer engineering" &&
          sectionSelected === "second semester" ? (
          <ComputerSecondSemester />
        ) : deptSelected === "communication engineering" &&
          sectionSelected === "first semester" ? (
          <CommunicationFirstSemester />
        ) : (
          <CommunicationSecondSemester />
        )}
      </div>
    </div>
  );
};

export default FifthYear;
