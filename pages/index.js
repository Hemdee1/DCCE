import Staff from "../components/Staff";
import HeaderLayout from "../components/HeaderLayout";
import Image from "next/image";

export default function Home() {
  return (
    <HeaderLayout>
      <main>
        <div className="w-full h-[400px] md:h-[550px] 2xl:h-[690px] relative">
          <Image
            src="/images/hero2.png"
            alt="hero image"
            fill
            className="object-cover max-w-full"
          />
        </div>

        <div className="max-w-full mx-auto w-inner-width padding">
          <h2 className="mt-10 sm:mt-[100px] text-xl sm:text-[32px] uppercase font-bold text-black">
            DEPARTMENT OF COMPUTER AND COMMUNICATIONS ENGINEERING
          </h2>

          <h3 className="uppercase text-black text-lg sm:text-2xl font-bold mt-10 sm:mt-[100px] mb-4 sm:mb-[50px]">
            history of the department
          </h3>
          <p className="text-sm text-justify sm:text-base">
            The Department of Computer and Communications Engineering was
            approved in 2011 to offer courses in Computer and Communications
            Engineering in the Abubakar Tafawa Balewa University, Bauchi.  The
            Department recorded its first intake of undergraduates in the
            2011/2012 academic session.  It currently have graduated its first
            set of 09 students and has five sets of undergraduates at 100, 200,
            300, 400 and 500 Levels numbered 57, 57, 46, 54 and 19 respectively,
            which makes a total of 233 undergraduates students.  More than 90%
            of the students admitted into the Department of Computer and
            Communications Engineering undergo a one year pre-degree programme
            in Faculty of science of this university. A few of them though come
            in by direct entry into 200Level of the Department.
            <br /> <br />
            Prof. O.U. Okereke, a Professor of Communication Engineering and
            some other prominent Lecturers of the University were some of the
            key staff who helped to start the Department. The syllabus to be
            used from 100 Level to 500 Level by the Department for the
            undergraduate studies was developed based on the recommendation of
            the National Universities Commission (NUC).
            <br /> <br />
            As Computer and Communications Engineering was formed from parts of
            Computer, Communications, Electrical and Electronics Engineering,
            the courses offered from 100 to 400 Levels are courses much related
            to Computer and Communications Engineering.
          </p>

          <h3 className="uppercase text-black text-lg sm:text-2xl font-bold mt-10 sm:mt-[100px] mb-4 sm:mb-[50px]">
            philosophy and objectives
          </h3>
          <p className="text-sm text-justify sm:text-base">
            The philosophy of the Department of Computer and Communications
            Engineering is in conformity with the overall philosophy of the
            university in that being basically a university of technology the
            training of the students is such as to produce graduates that
            possess sound theoretical and practical skills that would make them
            self-reliant, research and academic oriented, confident and
            competent to contribute meaningfully to the socio-economic and
            technological advancement of the nation. They must be capable of
            being abreast of the global changes in technology in the field of
            computer and communications engineering and allied fields by
            pursuing self-improvement programmes. As the world is currently
            undergoing industrial revolution in all sectors of the economy,
            graduates of the Department are equipped to excel in the areas of
            application of Information and Communication Technology (ICT) to the
            solution of developmental problems.
            <br /> <br />
            However, the objectives of the Department are:-
            <br /> <br />
            1. To train Engineers in the fields of Computer and Communications
            Engineering with high academic standard coupled with adequate
            practical experience, such that they are able to meet challenges of
            a National Economy and sufficiently tackle common day-to-day
            engineering problems.
            <br />
            2. To produce graduates with broad-based knowledge in general
            studies, management and humanities, all of which enhance their
            understanding, contribution and relevance to the society.
          </p>
        </div>
      </main>
    </HeaderLayout>
  );
}
