import { useState } from "react";
import FirstSemester from "./firstSemester";
import SecondSemester from "./secondSemester";
import { SemesterButtons } from "../SemesterButtons";
import { AnimatePresence, motion } from "framer-motion";

const FirstYear = () => {
  const [sectionSelected, setSectionSelected] = useState("first semester");
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
        first year
      </h3>

      <SemesterButtons
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
        setSwipeValue={setSwipeValue}
      />

      <AnimatePresence key={sectionSelected}>
        <div className="overflow-hidden">
          {sectionSelected === "first semester" ? (
            <motion.div {...fadeIn}>
              <FirstSemester />
            </motion.div>
          ) : (
            <motion.div {...fadeIn}>
              <SecondSemester />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default FirstYear;
