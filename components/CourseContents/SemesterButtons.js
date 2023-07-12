const links = ["first semester", "second semester"];

// SEMESTER BUTTONS FROM 100L TO 400L
const SemesterButtons = ({ sectionSelected, setSectionSelected }) => {
  return (
    <div className="mt-[50px] w-full mb-[50px] sm:px-5 left-0 sticky top-[148px] sm:top-[125px] overflow-clip shadow-md sm:shadow-none bg-white sm:bg-transparent shadow-gray-300">
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

export default SemesterButtons;
