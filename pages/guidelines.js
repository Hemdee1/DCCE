import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";

const Guidelines = () => {
  return (
    <HeaderLayout>
      <div className="w-full h-[400px] md:h-[550px] 2xl:h-[690px] relative bg-black">
        <Image
          src="/images/nlt2.jpeg"
          alt="hero image"
          priority
          fill
          className="object-cover max-w-full opacity-60"
        />
      </div>

      <article className="mt-12 sm:mt-[100px] max-w-full mx-auto w-inner-width padding">
        <div className="sm:bg-white w-full sm:p-[30px] sm:rounded-2xl sm:border border-primary-stroke text-sm sm:text-base">
          <h3 className="uppercase font-bold text-base mb-[30px] text-center">
            examinations guidelines
          </h3>

          <ul className="pl-2 sm:pl-5 leading-[38px] list-decimal">
            <li>
              A student shall be at the examination room at least ten (10)
              minutes before the advertised time of the examination. A student
              is required to supply his/her own pens, pencils, rulers,
              calculators etc. No one shall be permitted to borrow any material
              from another student during the course of the examination.
            </li>
            <li>
              A student may be admitted up to thirty minutes after the start of
              the examination but he/she shall not be allowed extra time. If a
              student arrives later than thirty minutes after the commencement
              of the extermination, an invigilator may at his discretion, admit
              him if he/she is satisfied that the student has good reasons for
              his/her lateness. The invigilator shall report the circumstances
              to the faculty examination officers who shall advise the board of
              examiners, which shall decide whether to accept the student paper.
            </li>
            <li>
              A student may be permitted by an invigilator to leave the
              examination room in the course of an examination provided that:{" "}
              <br /> a. He/she doesn’t leave during the first hour or the last
              fifteen (15) minutes of the examination.
              <br /> b. He/she hands his script to the invigilator before
              leaving, if he/she doesn’t intend to return.
              <br /> c. If he/she intends to return his script should be giving
              to the invigilator or any other person as directed by the
              invigilator throughout the period of his absence.
            </li>
            <li>
              A student brings his examination card to each examination and
              displays it in a prominent position on his desk.
            </li>
            <li>
              Each student shall complete the attendance register and slip which
              shall be collected by the invigilator of each examination.
            </li>
            <li>
              During an examination no student shall speak to any other student
              or to the invigilator of each examination.
            </li>
            <li>
              Any student caught making noise or causing disturbance during an
              examination shall be disqualified from the whole of the semester
              examinations.
            </li>
            <li>
              No book, printed-paper or written document or unauthorized aid may
              be taken into an examination room by students, excepts as may be
              stated in the rubrics of any examination paper.
            </li>
            <li>
              Students are required to deposit any hand-bag, briefcase etc.
              outside the examination room or any other space provided for its
              purpose ten (10) minutes before the start of an examination.
            </li>
            <li>
              A student must not, during an examination, directly or indirectly,
              give assistance to any other student or permit any other student
              to copy from or use of his papers. Similarly, a student must not
              directly accept assistance from any other student or use any other
              student’s paper. Receiving and giving assistance during an
              examination carry equal punishment.
            </li>
            <li>
              If any student is found to be or suspected of cheating or
              disturbing the conduct of the examination in any way, a report
              shall be made as soon as possible to circumstance to be
              investigated and reported to the board of examiners provided
              he/she causes no disturbance but the board of examiners may
              subsequently recommend to the faculty board and senate whether
              his/her paper should be accepted and as to any other action that
              should be taken in the case.
            </li>
            <li>
              A student should write his/her registration number, not his name
              distinctly at the top of the cover of every answer booklet or
              separate sheet of paper.
            </li>
            <li>
              The use of scrap paper is not permitted. All rough work must be
              done in the answer booklets which must be submitted to the
              invigilator. Apart from the printed question paper, a student may
              not remove from the examination room or mutilate any paper or
              other material supplied.
            </li>
            <li>
              At the end of the time allotted, each student shall stop writing
              when instructed to do so and shall gather his scripts together
              ready for collection by the invigilator.
            </li>
          </ul>

          <strong className="uppercase block mt-[50px]">
            Some specific examination misconduct and penalties applied when they
            are committed as approved by SENATE are given below.
          </strong>

          <ul className="pl-2 sm:pl-5 leading-[38px] list-disc">
            <li>
              <strong>Offence: </strong>
              Causing commotion, rudeness, disobedience of instruction from
              either an examination officer or invigilator.
              <br />
              <strong>Penalty: </strong>
              Letter of warning to the student and apology from the student to
              the offended officer or rustication of a semester depending on the
              magnitude of the offence. 
            </li>
            <li>
              <strong>Offence: </strong>Disturbance and talking during
              examination. <br />
              <strong>Penalty: </strong>Rustication for one semester.
            </li>
            <li>
              <strong>Offence: </strong>Writing rough work on a question paper
              or any other material other than the examination answer script
              provided. <br />
              <strong>Penalty: </strong>Rustication for one semester.
            </li>
            <li>
              <strong>Offence: </strong>Taking into and/or using foreign
              material in the examination hall.
              <br />
              <strong>Penalty: </strong>Expulsion from the University.
            </li>
            <li>
              <strong>Offence: </strong>Helping each other during examination.
              <br />
              <strong>Penalty: </strong>Expulsion from the University.
            </li>
            <li>
              <strong>Offence: </strong>Verbal or physical assault on the
              examination officer, invigilator or fellow student (s).
              <br />
              <strong>Penalty: </strong>Rustication for one semester, academic
              session or expulsion from the University depending on the
              magnitude of the offence.
            </li>
            <li>
              <strong>Offence: </strong>Unauthorized use of programmable
              calculator and exchange of such calculators.
              <br />
              <strong>Penalty: </strong>Expulsion from the University.
            </li>
            <li>
              <strong>Offence: </strong>Leaving the examination hall with answer
              booklet.
              <br />
              <strong>Penalty: </strong>Expulsion from the University.
            </li>
            <li>
              <strong>Offence: </strong>Entrance of examination hall with GSM
              handset.
              <br />
              <strong>Penalty: </strong>Rustication for one semester.
            </li>
            <li>
              <strong>Offence: </strong>Use of GSM handset in the examination
              hall.
              <br />
              <strong>Penalty: </strong>Expulsion from the University.
            </li>
            <li>
              <strong>Offence: </strong>Involvement of both staff and student in
              the leakage of any examination material.
              <br />
              <strong>Penalty: </strong>Expulsion of the student(s) from the
              University and reporting the staff to the University
              administration for further action.
            </li>
            <li>
              <strong>Offence: </strong>Stealing of examination material such as
              question paper, answer booklet etc.
              <br />
              <strong>Penalty: </strong>Expulsion from the University and
              handing over student to the police for further disciplinary
              measures.
            </li>
            <br />
            Other acts of examination misconduct not mentioned above would be
            determined by the examination misconduct committee and final
            decision would be taken by the University SENATE.
          </ul>
        </div>
      </article>
    </HeaderLayout>
  );
};

export default Guidelines;
