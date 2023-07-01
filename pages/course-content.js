import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { useEffect, useRef, useState } from "react";
import Entry from "../components/Admissions/Entry";
import Duration from "../components/Admissions/Duration";
import Degree from "../components/Admissions/Degree";
import Grading from "../components/Admissions/Grading";

const links = ["100L", "200L", "300L", "400L", "500L"];

const CourseContent = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 650 ||
        document.documentElement.scrollTop > 650
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  }, []);

  const [sectionSelected, setSectionSelected] = useState("100L");

  return (
    <HeaderLayout>
      <main>
        <div className="w-full h-[550px] 2xl:h-[690px] relative">
          <Image
            src="/images/hero1.png"
            alt="hero image"
            fill
            className="object-cover max-w-full"
          />
        </div>

        <div
          className={`mt-[100px] max-w-full mx-auto w-full border-primary-stroke mb-[50px] padding sticky top-[79px] overflow-clip transition-all duration-300 ${
            sticky ? "bg-white border-b" : "bg-transparent border-none"
          }`}
        >
          <div
            className={`bg-white mx-auto max-w-full flex border-primary-stroke gap-10 w-[550px] justify-between px-[50px] transition-all duration-300 ${
              sticky ? "rounded-none border-none" : "rounded-full border"
            }`}
          >
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
                    top: 655,
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

        <div>{/* <Fir */}</div>
      </main>
    </HeaderLayout>
  );
};

export default CourseContent;
