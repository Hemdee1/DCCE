import HeaderLayout from "../components/HeaderLayout";
import Image from "next/image";

export default function Engineering() {
  return (
    <HeaderLayout>
      <main>
        <div className="w-full h-[400px] md:h-[550px] 2xl:h-[690px] relative bg-black">
          <Image
            src="/images/dept2.jpeg"
            alt="hero image"
            fill
            className="object-cover max-w-full opacity-60"
          />
        </div>

        <div className="max-w-full mx-auto w-inner-width padding">
          <h2 className="mt-12 sm:mt-[100px] text-xl sm:text-[32px] uppercase font-bold text-black">
            THE FACULTY OF ENGINEERING AND ENGINEERING TECHNOLOGY
          </h2>

          <h3 className="uppercase text-black text-lg sm:text-2xl font-bold mt-10 sm:mt-[100px] mb-4 sm:mb-[50px]">
            Brief History of the Faculty
          </h3>
          <p className="text-sm text-justify sm:text-base">
            The Faculty of Engineering has been in existence from the inception
            of the University. Presently, the faculty comprises of nine (9)
            Departments namely: Agric and Bio-resources Engineering, Automobile
            Engineering, Chemical Engineering, Civil Engineering, Computer and
            Communications Engineering, Electrical and Electronics Engineering,
            Mechanical Engineering, Mechatronics and Systems Engineering and
            Petroleum Engineering.
          </p>

          <h3 className="uppercase text-black text-lg sm:text-2xl font-bold mt-10 sm:mt-[100px] mb-4 sm:mb-[50px]">
            Officers of the Faculty
          </h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex flex-col gap-2 sm:flex-row">
              <strong>Dean:</strong>Prof. A.D.I. Sulaiman
            </li>
            <li className="flex flex-col gap-2 sm:flex-row">
              <strong>Deputy Dean:</strong>Prof. Y. S. Haruna
            </li>
            <li className="flex flex-col gap-2 sm:flex-row">
              <strong>Faculty Exams Officer:</strong> Engr. Dr. N. Lukman
            </li>
            <li className="flex flex-col gap-2 sm:flex-row">
              <strong>Faculty Time-Table Officer:</strong>Engr. Jameel Ahmed
            </li>
            <li className="flex flex-col gap-2 sm:flex-row">
              <strong>Faculty Officer: </strong>Mrs Salamatu Sani
            </li>
            <li className="flex flex-col gap-2 sm:flex-row">
              <strong>Secretary to the Dean:</strong>Mr. Abubakar Yakubu Dass.
            </li>
          </ul>
        </div>
      </main>
    </HeaderLayout>
  );
}
