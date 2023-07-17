import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { useState } from "react";
import { approvedProjects } from "../data";

const ApprovedProjects = () => {
  const [projects, setProjects] = useState(approvedProjects);

  const handleChange = (e) => {
    const value = e.target.value;

    const filteredProjects = approvedProjects.map((element) => {
      return {
        ...element,
        projects: element.projects.filter((project) =>
          project.project.toLowerCase().includes(value.toLowerCase())
        ),
      };
    });

    setProjects(filteredProjects);
  };

  return (
    <HeaderLayout>
      <main>
        <div className="w-full h-[400px] md:h-[550px] 2xl:h-[690px] relative bg-black">
          <Image
            src="/images/dept3.jpeg"
            alt="hero image"
            fill
            className="object-cover max-w-full opacity-60"
          />
        </div>

        <div className="mt-12 sm:mt-[100px] z-20 max-w-full mx-auto w-full border-primary-stroke mb-[50px] px-5 sticky top-[98px] sm:top-[77px] overflow-clip transition-all duration-300">
          <div className="bg-white mx-auto max-w-full flex border-primary-stroke gap-3 flex-wrap sm:flex-nowrap sm:gap-10 w-[600px] justify-between p-1 sm:p-2 overflow-clip transition-all duration-300 rounded-full border">
            <input
              type="search"
              className="flex-1 px-4 py-1 rounded-full outline-none sm:py-2 bg-black/10"
              placeholder="search using keywords e.g microcontroller, wireless, antenna, website, or database"
              onChange={handleChange}
            />
          </div>
        </div>

        <article className="mt-12 sm:mt-[50px] max-w-full mx-auto w-inner-width padding">
          <div className="sm:bg-white w-full sm:p-[30px] sm:rounded-2xl sm:border border-primary-stroke text-sm sm:text-base">
            <h3 className="uppercase font-bold text-lg sm:text-xl mb-[30px] text-center">
              APPROVED PROJECTS AND SUPERVISOR LIST
            </h3>

            <div className="mt-5 space-y-16 leading-[30px]">
              {projects.map((data, index) => {
                const { lecturer, projects } = data;

                return (
                  <div className="space-y-3 capitalize" key={index}>
                    <h3 className="text-base font-bold capitalize sm:text-lg">
                      {lecturer}
                    </h3>
                    <ul className="pl-2 space-y-3 list-disc sm:pl-5">
                      {projects.map((project, i) => (
                        <li key={i}>
                          <span>{project.project}</span>
                          <span className="block mt-1 font-semibold">
                            {project.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </main>
    </HeaderLayout>
  );
};

export default ApprovedProjects;
