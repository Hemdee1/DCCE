import { FirstElectiveTable, FirstSemesterTable } from "./computerTable";

const ComputerFirstSemester = () => {
  return (
    <article className="max-w-full mx-auto w-inner-width px-2 sm:px-5">
      <div className="bg-white w-full p-3 sm:p-[50px] rounded-2xl border border-primary-stroke">
        <FirstSemesterTable />

        <h3 className="font-bold text-center uppercase mt-[30px]">
          Elective Courses
        </h3>
        <FirstElectiveTable />

        <p className="text-sm sm:text-base mt-12 sm:mt-[100px]">
          <strong>CCE510: PROJECT AND SEMINAR II (4 UNITS)</strong> <br />
          This course lasts for one academic session.  Each student or group of
          students must undertake a project under the supervision of a lecturer,
          submit a comprehensive project report and present  seminar(s) at the
          end of the year.  A project status report is to be presented with an
          appraisal seminar at the end of the first semester.  Each student must
          attend Engineering Seminars.
          <br /> <br />
          <strong>CCE511: SYSTEM PROGRAMMING (2 UNITS)</strong> <br />
          General machine structure: program counters and instruction registers.
          Machine Language and Assembly Language.Instruction formats and types
          of instructions, including operation codes, index and address
          registers, Addressing techniques; the use of unconomics to represent
          operation codes in Assembly Language. Symbolic Labels and the
          functions of the symbol Tables.The functions of the passes of a 2-pass
          Assembler.  Macros: Definition and use, in relation to open
          sub-routine. Loaders: Absolute and Relocatable loaders. Compilers
          design.
          <br /> <br />
          <strong>CCE512: INTERNET TECHNOLOGY AND PROGRAMMING (2 UNITS)</strong>
          <br />
          The Internet architecture and organization.Internet Protocols – IPV4
          and IPV6.  Addressing and routing: Web authoring, Designing and
          managing websites. E-Commerce.
          <br /> <br />
          <strong>CCE513: INDUSTRIAL ELECTRONICS (2 UNITS)</strong> <br />
          Characteristics and industrial applications of thyristors and other
          SCR devices.Transducers and their applications in sensing light,
          voltage pressure, motion, current temperature, etc.  Mechanical
          relays, solid state relays and stepping motors.  Real time control and
          remote control concepts in instrumentation.  Micro-processor and
          micro-computer based systems.Fire alarms, burglar alarms and general
          home and industrial instrumentation.
          <br /> <br />
          <strong>CCE514: COMPUTER ARCHITECTURE(3 UNITS)</strong> <br />
          Introduction to design techniques for the synthesis of digital
          computers.  Principles of computer structure and design as applied to
          major computer functions.  Topics include design methodology,
          processor and C.P.U design, memory organization, communications, I/O
          and multiple CPU systems; Introduction to Parallel Processing.
          <br /> <br />
          <strong>
            CCE515: INTRODUCTION TO ARTIFICIAL INTELLIGENCE (2 UNITS)
          </strong>
          <br />
          Introduction, heuristic search and problem solving, reasoning and
          inference (deductive and inductive inference), natural language
          understanding, knowledge representation, image understanding,
          learning, and cognitive modelling, computer vision, robotics and
          societal impact.
          <br /> <br />
          <strong>EE501: CONTROL ENGINEERING II (3 UNITS)</strong> <br />
          State space description of linear systems, concepts of controllability
          and observability, state feedback, model control observers,
          realization of systems having specified transfer functions,
          applications to circuits synthesis and signal processing.
          <br /> <br />
          <strong>
            EE502: MICROCOMPUTER & MICROPROCESSOR SYSTEMS (3 UNITS)
          </strong>
          <br />
          Elements of digital computer design; control unit, microprogramming,
          bus organization, and addressing schemes.  Microprocessors: system
          architecture, bus control, instruction execution, and addressing
          modes.  Machines codes, assembly as state machines.  Microprocessor
          interfacing: input output techniques, interrupt systems; and direct
          memory access; interfacing to analogue systems and applications of D/A
          and A/D converters.  System development tools: Simulators, EPROM
          programming, assemblers, and leaders, overview of available
          microprocessor and microcomputer systems, operating systems, and
          compilers.  A close study of one of the commonly used 8- and 16- bit
          microprocessors.  Microprocessor applications.  Design, construction,
          programming and testing of microprocessor control system; bylit
          control, real-time clocks, function generation and system monitoring,
          etc.
          <br /> <br />
          <strong>EE507: DIGITAL SIGNAL PROCESSING (2 UNITS)</strong> <br />
          Discrete signals and z transform, discrete Fourier Transform, Fast
          Fourier Transform. The approximation problem in network
          theory.Synthesis of low-pass filters.Spectral transform and their
          application in synthesis of high-pass and band-pass filters.  Digital
          filtering, digital transfer function, aliasing, one-dimensional
          recursive and non-recursive filters, computer techniques in filter
          synthesis.  Realization of filters in hardware and software.Basic
          image processing concepts.
          <br /> <br />
          <strong>
            EE513: MICROCOMPUTER AND MICROPROCESSOR SYSTEMS LABORATORY (1 UNIT)
          </strong>
          <br />
          A laboratory designed to illustrate topics covered in EE 502 and some
          topics in EE 515.
          <br /> <br />
          <strong>ST37:  PROBABILITY THEORY (3 UNITS)</strong> <br />
          Sampling distribution of mean, and variance from the normal
          population, law of large numbers and the central limit
          theorem.Functions of random variables, distribution of function of
          random variables. Joint distribution (discrete and continuous):
          Marginal and conditional distributions, conditional expectation,
          covariance, coefficient of correlation, standard random variables.
          Moment generating functions, and transformation techniques.Probability
          integral transformation.
          <br /> <br />
          <strong>ST372: OPTIMIZATION THEORY (3 UNITS)</strong> <br />
          Linear programming models, the simplex method: Formulation and theory.
          Duality integer  programming. Transport problem. Assignment problem,
          allocation problem, two person zero games, Kuhn-Tucker methods,
          optimality criteria, simple variable optimization, multivariable
          techniques.Gradient methods.
          <br /> <br />
          <strong>MTH336: OPERATIONS RESEARCH I (3 UNITS)</strong> <br />
          Linear programming: Simplex method. Dual simplex method. Post
          optimality sensitivity analysis. Parametric linear
          programming.Transportation of problem. Non-linear programming:
          Classical optimization theory, unconstrained and constrained problems.
          Non-linear programming algorithms integer programming: Integer linear
          programming, Integer non-linear programming.
        </p>
      </div>
    </article>
  );
};

export default ComputerFirstSemester;
