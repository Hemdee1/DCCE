const links = ["first semester", "second semester"];
const depts = ["computer engineering", "communication engineering"];

// SEMESTER BUTTONS FROM 100L TO 400L
const SemesterButtons = ({ sectionSelected, setSectionSelected }) => {
  return (
    <div className="mt-[50px] w-full mb-[50px] sm:px-5 left-0 sticky top-[138px] sm:top-[125px] overflow-clip shadow-md sm:shadow-none bg-white sm:bg-transparent shadow-gray-300">
      <div className="bg-white mx-auto max-w-full flex border-primary-stroke gap-10 w-[350px] justify-between px-10 sm:px-[30px] sm:border sm:rounded-full">
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
  );
};

// SEMESTER BUTTONS FOR 500L
const FifthSemesterButton = ({
  sectionSelected,
  setSectionSelected,
  deptSelected,
  setDeptSelected,
}) => {
  return (
    <div className="mt-[50px] w-full mb-[50px] sm:px-5 left-0 sticky top-[138px] sm:top-[125px] overflow-clip shadow-md sm:shadow-none bg-white sm:bg-transparent shadow-gray-300">
      <div className="bg-white mx-auto max-w-full flex flex-col sm:flex-row border-primary-stroke gap-2 sm:gap-10 w-[900px] justify-between px-10 sm:px-[30px] sm:border sm:rounded-full">
        <div className="flex justify-between gap-2 sm:gap-10">
          {depts.map((dept, index) => (
            <button
              key={index}
              className={`py-2 sm:py-3 font-bold text-xs sm:text-sm uppercase border-semantic ${
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
              className={`py-2 sm:py-3 font-bold text-xs sm:text-sm uppercase border-semantic ${
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
  );
};

export { SemesterButtons, FifthSemesterButton };
