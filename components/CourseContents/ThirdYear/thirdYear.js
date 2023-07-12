import { useState } from "react";
import FirstSemester from "./firstSemester";
import SecondSemester from "./secondSemester";

const links = ["first semester", "second semester"];

const ThirdYear = () => {
  const [sectionSelected, setSectionSelected] = useState("first semester");

  return (
    <div className="mt-[50px]">
      <h3 className="text-4xl font-bold text-center uppercase">third year</h3>

      <div className="mt-[50px] w-full mb-[50px] padding left-0 sticky top-[125px] overflow-clip">
        <div className="bg-white mx-auto max-w-full flex border-primary-stroke gap-10 w-[350px] justify-between px-[30px] border rounded-full">
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
        {sectionSelected === "first semester" ? (
          <FirstSemester />
        ) : (
          <SecondSemester />
        )}
      </div>
    </div>
  );
};

export default ThirdYear;
