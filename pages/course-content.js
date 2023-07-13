import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { useEffect, useState } from "react";
import FirstYear from "../components/CourseContents/FirstYear/firstYear";
import SecondYear from "../components/CourseContents/SecondYear/secondYear";
import ThirdYear from "../components/CourseContents/ThirdYear/thirdYear";
import FourthYear from "../components/CourseContents/FourthYear/fourthYear";
import FifthYear from "../components/CourseContents/FifthYear/fifthYear";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const links = ["100L", "200L", "300L", "400L", "500L"];

const CourseContent = () => {
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

  const [sectionSelected, setSectionSelected] = useState("100L");

  useEffect(() => {
    const { section } = router.query;

    if (!section) return;

    setSectionSelected(section);
  }, [router]);

  const [swipeValue, setSwipeValue] = useState(200);

  const fadeIn = {
    initial: {
      x: swipeValue,
      opacity: 0,
    },
    exit: {
      x: swipeValue,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
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
          className={`mt-12 sm:mt-[100px] z-20 max-w-full mx-auto w-full border-primary-stroke mb-[50px] sm:px-5 sticky top-[98px] sm:top-[77px] overflow-clip transition-all duration-300 ${
            sticky ? "bg-white border-y" : "bg-transparent border-none"
          }`}
        >
          <div
            className={`bg-white mx-auto max-w-full flex border-primary-stroke gap-3 flex-wrap sm:flex-nowrap sm:gap-10 w-[600px] justify-between px-5 sm:px-[50px] overflow-clip transition-all duration-300 ${
              sticky ? "rounded-none border-none" : "sm:rounded-full sm:border"
            }`}
          >
            {links.map((link, index) => (
              <button
                key={index}
                className={`py-2 sm:py-3 font-semibold text-sm uppercase border-semantic transition-all duration-300 ${
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

        <AnimatePresence key={sectionSelected} mode="wait">
          <div className="overflow-hidden">
            {sectionSelected === "100L" ? (
              <motion.div {...fadeIn}>
                <FirstYear />
              </motion.div>
            ) : sectionSelected === "200L" ? (
              <motion.div {...fadeIn}>
                <SecondYear />
              </motion.div>
            ) : sectionSelected === "300L" ? (
              <motion.div {...fadeIn}>
                <ThirdYear />
              </motion.div>
            ) : sectionSelected === "400L" ? (
              <motion.div {...fadeIn}>
                <FourthYear />
              </motion.div>
            ) : (
              <motion.div {...fadeIn}>
                <FifthYear />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </main>
    </HeaderLayout>
  );
};

export default CourseContent;
