import Staff from "../../components/Staff";
import HeaderLayout from "../../components/HeaderLayout";
import { academicStaffs, nonAcademicStaff, technicalStaff } from "../../data";

export default function Staffs() {
  return (
    <HeaderLayout>
      <main className="max-w-full pt-20 mx-auto w-inner-width padding">
        <h1 className="text-2xl font-bold text-center text-black uppercase">
          Academic Staff
        </h1>
        <div className="mt-20 w-full flex flex-wrap justify-center gap-y-[50px] gap-x-[30px]">
          {academicStaffs.map((staff, id) => (
            <Staff key={id} staff={staff} />
          ))}
        </div>

        <h1 className="mt-20 text-2xl font-bold text-center text-black uppercase">
          Technical Staff
        </h1>
        <div className="mt-20 w-full flex flex-wrap justify-center gap-y-[50px] gap-x-[30px]">
          {technicalStaff.map((staff, id) => (
            <Staff key={id} staff={staff} />
          ))}
        </div>

        <h1 className="mt-20 text-2xl font-bold text-center text-black uppercase">
          Non Academic Staff
        </h1>
        <div className="mt-20 w-full flex flex-wrap justify-center gap-y-[50px] gap-x-[30px]">
          {nonAcademicStaff.map((staff, id) => (
            <Staff key={id} staff={staff} />
          ))}
        </div>
      </main>
    </HeaderLayout>
  );
}
