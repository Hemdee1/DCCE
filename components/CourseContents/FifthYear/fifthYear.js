import { useState } from "react";
import ComputerFirstSemester from "./computerFirstSemester";
import ComputerSecondSemester from "./computerSecondSemester";
import CommunicationSecondSemester from "./communicationSecondSemester";
import CommunicationFirstSemester from "./communicationFirstSemester";
import { FifthSemesterButton } from "../SemesterButtons";
import { AnimatePresence, motion } from "framer-motion";

const FifthYear = () => {
  const [sectionSelected, setSectionSelected] = useState("first semester");
  const [deptSelected, setDeptSelected] = useState("computer engineering");
  const [swipeValue, setSwipeValue] = useState(200);

  const fadeIn = {
    initial: {
      x: swipeValue,
    },
    exit: {
      x: swipeValue,
    },
    animate: {
      x: 0,
    },
    transition: {
      type: "spring",
      duration: 0.7,
    },
  };

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
        setSwipeValue={setSwipeValue}
      />

      <AnimatePresence key={sectionSelected} mode="wait">
        <div className="overflow-hidden">
          {deptSelected === "computer engineering" &&
          sectionSelected === "first semester" ? (
            <motion.div {...fadeIn}>
              <ComputerFirstSemester />
            </motion.div>
          ) : deptSelected === "computer engineering" &&
            sectionSelected === "second semester" ? (
            <motion.div {...fadeIn}>
              <ComputerSecondSemester />
            </motion.div>
          ) : deptSelected === "communication engineering" &&
            sectionSelected === "first semester" ? (
            <motion.div {...fadeIn}>
              <CommunicationFirstSemester />
            </motion.div>
          ) : (
            <motion.div {...fadeIn}>
              <CommunicationSecondSemester />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default FifthYear;
