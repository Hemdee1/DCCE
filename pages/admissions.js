import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { useEffect, useState } from "react";
import Entry from "../components/Admissions/Entry";
import Duration from "../components/Admissions/Duration";
import Degree from "../components/Admissions/Degree";
import Grading from "../components/Admissions/Grading";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  "entry requirements",
  "duration of course",
  "degree nomenclature",
  "grading system",
];

const Admissions = () => {
  const [sticky, setSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const value = window.innerWidth > 640 ? 650 : 425;

    window.onscroll = () => {
      if (document.documentElement.scrollTop > value) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  }, []);

  const [sectionSelected, setSectionSelected] = useState("entry requirements");

  useEffect(() => {
    const { section } = router.query;

    if (!section) return;

    setSectionSelected(section);
  }, [router]);

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

  const handleClick = (link, index) => {
    window.scrollTo({
      top: window.innerWidth > 640 ? 655 : 430,
      left: 0,
      behavior: "smooth",
    });

    const prevSectionIndex = links.indexOf(sectionSelected);

    setSwipeValue(prevSectionIndex < index ? 200 : -200);

    setSectionSelected(link);
  };

  return (
    <HeaderLayout>
      <main>
        <div className="w-full h-[400px] md:h-[550px] 2xl:h-[690px] relative">
          <Image
            src="/images/hero1.png"
            alt="hero image"
            fill
            className="object-cover max-w-full"
          />
        </div>

        <div
          className={`mt-12 sm:mt-[100px] max-w-full mx-auto w-full border-primary-stroke mb-[50px] sm:px-5 sticky top-[98px] sm:top-[77px] overflow-clip transition-all duration-300 ${
            sticky ? "bg-white border-y" : "bg-transparent border-none"
          }`}
        >
          <div
            className={`bg-white mx-auto max-w-full flex border-primary-stroke gap-1 flex-wrap sm:flex-nowrap sm:gap-10 w-inner-width justify-between px-5 sm:px-[50px] overflow-clip transition-all duration-300 ${
              sticky
                ? "w-full rounded-none border-none"
                : "w-inner-width sm:rounded-full sm:border"
            }`}
          >
            {links.map((link, index) => (
              <button
                key={index}
                className={`py-2 sm:py-4 font-bold text-xs sm:text-sm uppercase border-semantic ${
                  sectionSelected === link
                    ? "border-b-2 text-semantic"
                    : "text-[#222] border-none"
                }`}
                onClick={() => handleClick(link, index)}
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence key={sectionSelected}>
          <div className="overflow-hidden">
            {sectionSelected === "entry requirements" ? (
              <motion.div {...fadeIn}>
                <Entry />
              </motion.div>
            ) : sectionSelected === "duration of course" ? (
              <motion.div {...fadeIn}>
                <Duration />
              </motion.div>
            ) : sectionSelected === "degree nomenclature" ? (
              <motion.div {...fadeIn}>
                <Degree />
              </motion.div>
            ) : (
              <motion.div {...fadeIn}>
                <Grading />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </main>
    </HeaderLayout>
  );
};

export default Admissions;
