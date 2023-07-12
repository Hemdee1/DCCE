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

      <div className="mt-[50px] w-full mb-[50px] padding left-0 sticky top-[125px] overflow-clip">
        <div className="bg-white mx-auto max-w-full flex border-primary-stroke gap-10 w-[650px] justify-between px-[30px] border rounded-full">
          {depts.map((dept, index) => (
            <button
              key={index}
              className={`py-3 font-bold text-sm uppercase border-semantic ${
                deptSelected === dept
                  ? "border-b-2 text-semantic"
                  : "text-[#222] border-none"
              }`}
              onClick={() => {
                window.scrollTo({
                  top: 795,
                  left: 0,
                  behavior: "smooth",
                });
                setDeptSelected(dept);
              }}
            >
              {dept}
            </button>
          ))}
          {links.map((link, index) => (
            <button
              key={index}
              className={`py-3 font-bold text-sm uppercase border-semantic ${
                sectionSelected === link
                  ? "border-b-2 text-semantic"
                  : "text-[#222] border-none"
              }`}
              onClick={() => {
                window.scrollTo({
                  top: 795,
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
