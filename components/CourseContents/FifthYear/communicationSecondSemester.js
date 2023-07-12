import { SecondElectiveTable, SecondSemesterTable } from "./communicationTable";

const CommunicationSecondSemester = () => {
  return (
    <article className="max-w-full mx-auto w-inner-width padding">
      <div className="bg-white w-full p-[50px] rounded-2xl border border-primary-stroke">
        <SecondSemesterTable />

        <h3 className="font-bold text-center uppercase mt-[30px]">
          Elective Course
        </h3>
        <SecondElectiveTable />

        <p className="text-sm mt-[100px]">
          <strong>CCE510: PROJECT AND SEMINAR II (4 UNITS)</strong> <br />
          This course lasts for one academic session.  Each student or group of
          students must undertake a project under the supervision of a lecturer,
          submit a comprehensive project report and present  seminar(s) at the
          end of the year.  A project status report is to be presented with an
          appraisal seminar at the end of the first semester.  Each student must
          attend Engineering Seminars.
          <br /> <br />
          <strong>CCE522: ELECTRONIC MATERIALS TECHNOLOGY(2 UNITS)</strong>
          <br />
          Diffraction technique.The growth of crystal including epitaxy vacuum
          techniques.Oxidation, diffusion,
          sintering.Photofabricationmeallisation and encapsulation
          techniques.Magnetic material devices, Techniques of making storage
          elements.Pressure devices technologies.
          <br /> <br />
          <strong>
            CCE525 (EE517): TELECOMMUNICATION ENGINEERING (2 UNITS)
          </strong>
          <br />
          This course contains a description of some of the current and emerging
          technologies in various areas of telecommunication. They include; 4G
          systems and Beyond, Smart grid, Green Communication, Radio Resource
          and Interference Management, Mobile Cloud, Vehicular Networks,
          Internet of Things (IoT). 4G systems and Beyond: HSPA, HSPA+,
          LTE-Advanced, Specifications for 4G systems, emerging 5G. <br />
          Smart Grid: Definition, Applications and benefits, Standards and Smart
          grid projects. <br />
          Green Communication: Heterogeneous networks, Base station Relaying,
          Cell Zooming, Cell switching, Energy-efficient power amplifier
          techniques, Management of Physical layer using
          Multiple-in-Multiple-out (MIMO), Cognitive radio <br />
          Radio resource and interference management: Concept, Algorithm; Hand
          off, Power Control, Admission Control, Load control and Packet
          Scheduling. <br />
          Mobile Cloud: Definition, Architecture, Requirements, Applications and
          Challenges of mobile cloud. Vehicular Networks:  Communications in
          Vehicular Network, Current Trends in Vehicular Ad Hoc Networks,
          Architecture, Characteristics and Challenges. <br />
          Internet of Things: Definition, State of Art, Challenges of IoT and
          Future of IoT.
          <br /> <br />
          <strong>CCE526: DIGITAL COMMUNICATION SYSTEM (2 UNITS)</strong> <br />
          Block diagram of digital communication system, sampling theorem,
          Shanom theorem and applications in digital communication system.
          Advantages of digital signals.Noise in digital digital
          systems.Filtering and equalisation. Digital modulation techniques:
          FSK, ASK, QPSK, M-PSK, QAM, etc. Error detection and correction
          techniqes. Encodes and decorders. Applications of digital
          communication, telephoning, microwave, wireless communication,
          internet technology.
          <br /> <br />
          <strong>CCE527: IMAGE AND DATA TRANSMISSION SYSTEM (2 UNITS)</strong>
          <br />
          A/D and D/A transformation, coding, error detection and correction
          Asynchronous and synchronous transmission, modern schemes, channel
          capacity, equalization techniques, practical modern applications,
          simplified network configurations, data switching.
          <br /> <br />
          <strong>CCE528: COMMUNICATION SYSTEMS PLANNING (2 UNITS)</strong>
          <br />
          FDM. CCITT, modulation plans, high order PCMCCITT requirement delta
          modulation and adpm, different type systems co-operation integrated
          network, network planning.
          <br /> <br />
          <strong>
            EE523: SYSTEM RELIABILITY AND MAINTAINABILITY (2 UNITS)
          </strong>
          <br />
          Introduction to Reliability; maintainability, availability.Elementary
          reliability theory.Application to power systems and electronic
          components.Test characteristics of electrical and electronics
          components.Types of fault.Designing for higher reliability.Packaging,
          mounting, ventilation.Protection from humidity, dust.
          <br /> <br />
          <strong>ST382: PROBABILITY THEORY II (4 UNITS)</strong> <br />
          Chebyshev’s inequality. Convolution, special probability
          distributions: Lognormal distribution, gamma and beta distributions.
          T, X and F distributions, derivation and properties of X and F
          distributions.Exponential families of distribution.Theorem, order
          statistics.Convergence concepts. Characteristic functions. Limit
          theorem. Lindeberg theorem.Lapunov’s theorem.
          <br /> <br />
          <strong>ST381: TIME SERIES AND INDEX NUMBERS (3 UNITS)</strong> <br />
          Introduction to time series.Types of fluctuation. (trend, seasonal,
          cyclical and random), analysis of trend (linear and non-linear
          models), seasonal fluctuation, seasonal index, ratio to trend method,
          link relative methods, fitting of periodic functions. General types of
          index numbers, base period, composite price and physical volume index,
          Laspeyer, Fisher and Pashee indexes, cyclical component
          <br /> <br />
          <strong>MTH346: OPERATIONS RESEARCH II (3 UNITS) </strong> <br />
          Project scheduling by PERM-COM. Network representations. Stochastic
          programming: Stochastic dynamic programming. Dynamic programming:
          decision theory and Games: Decisions under risk. Decisions under
          uncertainty.Game theory. Inventory models: Deterministic and
          probabilistic models.
        </p>
      </div>
    </article>
  );
};

export default CommunicationSecondSemester;
