import HeaderLayout from "../components/HeaderLayout";
import Image from "next/image";

export default function Engineering() {
  return (
    <HeaderLayout>
      <main>
        <div className="w-full h-[550px] 2xl:h-[690px] relative">
          <Image
            src="/images/hero2.png"
            alt="hero image"
            fill
            className="object-cover max-w-full"
          />
        </div>

        <div className="max-w-full mx-auto w-inner-width padding">
          <h2 className="mt-[100px] text-[32px] uppercase font-bold text-black">
            THE FACULTY OF ENGINEERING AND ENGINEERING TECHNOLOGY
          </h2>

          <h3 className="uppercase text-black text-2xl font-bold mt-[100px] mb-[50px]">
            Brief History of the Faculty
          </h3>
          <p>
            The Faculty of Engineering has been in existence from the inception
            of the University. Presently, the faculty comprises of nine (9)
            Departments namely: Agric and Bio-resources Engineering, Automobile
            Engineering, Chemical Engineering, Civil Engineering, Computer and
            Communications Engineering, Electrical and Electronics Engineering,
            Mechanical Engineering, Mechatronics and Systems Engineering and
            Petroleum Engineering.
          </p>

          <h3 className="uppercase text-black text-2xl font-bold mt-[100px] mb-[50px]">
            Officers of the Faculty
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <strong>Dean:</strong>Prof. A.D.I. Sulaiman
            </li>
            <li className="flex gap-2">
              <strong>Deputy Dean:</strong>Prof. Y. S. Haruna
            </li>
            <li className="flex gap-2">
              <strong>Faculty Exams Officer:</strong> Engr. Dr. N. Lukman
            </li>
            <li className="flex gap-2">
              <strong>Faculty Time-Table Officer:</strong>Engr. Jameel Ahmed
            </li>
            <li className="flex gap-2">
              <strong>Faculty Officer: </strong>Mrs Salamatu Sani
            </li>
            <li className="flex gap-2">
              <strong>Secretary to the Dean:</strong>Mr. Abubakar Yakubu Dass.
            </li>
          </ul>
        </div>
      </main>
    </HeaderLayout>
  );
}
