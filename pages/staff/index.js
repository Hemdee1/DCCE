import Staff from "../../components/Staff";
import HeaderLayout from "../../components/HeaderLayout";
import { academicStaffs, nonAcademicStaff, technicalStaff } from "../../data";

export default function Staffs() {
  return (
    <HeaderLayout>
      <main className="max-w-full pt-12 mx-auto sm:pt-20 w-inner-width padding">
        <h1
          className="text-xl font-bold text-center text-black uppercase sm:text-2xl"
          id="academic"
        >
          Academic Staff
        </h1>
        <div className="mt-8 sm:mt-20 w-full flex flex-wrap justify-center gap-y-6 sm:gap-y-[50px] gap-x-[30px]">
          {academicStaffs.map((staff, id) => (
            <Staff key={id} staff={staff} />
          ))}
        </div>

        <h1
          className="mt-20 text-xl font-bold text-center text-black uppercase sm:text-2xl"
          id="technical"
        >
          Technical Staff
        </h1>
        <div className="mt-8 sm:mt-20 w-full flex flex-wrap justify-center gap-y-6 sm:gap-y-[50px] gap-x-[30px]">
          {technicalStaff.map((staff, id) => (
            <Staff key={id} staff={staff} />
          ))}
        </div>

        <h1
          className="mt-20 text-xl font-bold text-center text-black uppercase sm:text-2xl"
          id="non-academic"
        >
          Non Academic Staff
        </h1>
        <div className="mt-8 sm:mt-20 w-full flex flex-wrap justify-center gap-y-6 sm:gap-y-[50px] gap-x-[30px]">
          {nonAcademicStaff.map((staff, id) => (
            <Staff key={id} staff={staff} />
          ))}
        </div>
      </main>
    </HeaderLayout>
  );
}
