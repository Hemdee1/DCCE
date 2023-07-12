import { useState } from "react";
import FirstSemester from "./firstSemester";
import SecondSemester from "./secondSemester";
import SemesterButtons from "../SemesterButtons";

const FirstYear = () => {
  const [sectionSelected, setSectionSelected] = useState("first semester");

  return (
    <div className="mt-[50px]">
      <h3 className="text-4xl font-bold text-center uppercase">first year</h3>

      <SemesterButtons
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      />

      <div>
        {sectionSelected === "first semester" ? (
          <FirstSemester />
        ) : (
          <SecondSemester />
        )}
      </div>
    </div>
  );
};

export default FirstYear;
