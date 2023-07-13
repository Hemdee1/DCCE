import { useState } from "react";
import ComputerFirstSemester from "./computerFirstSemester";
import ComputerSecondSemester from "./computerSecondSemester";
import CommunicationSecondSemester from "./communicationSecondSemester";
import CommunicationFirstSemester from "./communicationFirstSemester";
import { FifthSemesterButton } from "../SemesterButtons";

const FifthYear = () => {
  const [sectionSelected, setSectionSelected] = useState("first semester");
  const [deptSelected, setDeptSelected] = useState("computer engineering");

  return (
    <div className="mt-[50px]">
      <h3 className="text-2xl sm:text-4xl font-bold text-center uppercase">
        fifth year
      </h3>

      <FifthSemesterButton
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
        deptSelected={deptSelected}
        setDeptSelected={setDeptSelected}
      />

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
