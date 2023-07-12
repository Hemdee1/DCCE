import GradingTable from "./GradingTable";

const Grading = () => {
  return (
    <article className="mt-12 sm:mt-[100px] max-w-full mx-auto w-inner-width px-2 sm:px-5">
      <div className="bg-white w-full p-3 sm:p-[30px] rounded-2xl border border-primary-stroke">
        <h3 className="uppercase font-bold mb-[30px]">grading system</h3>

        <p className="text-sm sm:text-base">
          The approved grading scheme under the minimum academic standard is
          applicable in grading undergraduate degree course in the department of
          Computer and Communications Engineering. The grading system used in
          the University is as presented in Table 4. 
          <br />
          With effect from 2013/2014 session, a student shall be deemed to have
          passed an examination if he scores at least a grade of “D” (2.00
          point) or above. A student who absents himself/herself from an
          examination for a course which he has duly registered without a reason
          acceptable to SENATE will automatically earn an “F” grade for the
          examination.
        </p>

        <h3 className="uppercase font-semibold mt-[30px] mb-[30px]">
          graduation requirements
        </h3>
        <p className="text-sm">
          To be eligible for the award of a degree, a student must obtain a
          minimum total number of courses units specified by the department
          including those earned from industrial experience and University
          course requirements.
        </p>

        <div className="mt-[50px]">
          <GradingTable />
        </div>
      </div>
    </article>
  );
};

export default Grading;
