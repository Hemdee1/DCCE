import { FirstSemesterTable } from "./Table";

const FirstSemester = () => {
  return (
    <article className="max-w-full mx-auto w-inner-width px-2 sm:px-5">
      <div className="bg-white w-full p-3 sm:p-[50px] rounded-2xl border border-primary-stroke">
        <FirstSemesterTable />

        <p className="text-sm sm:text-base mt-12 sm:mt-[100px]">
          <strong>MTH 337: NUMERICAL ANALYSIS I (3 UNITS)</strong> <br />
          Solution of single algebraic equations: Newtons method, Bairstows
          method.  Interpolation.  Solution of Systems of equations: Matrix
          algebra, Gaussian methods, LU decomposition, iterative methods, matrix
          inversion.  Interpolating polynomials.Numerical differentiation and
          integration.  Numerical solutions of ordinary differential equations: 
          Initial and boundary value problems. Eulers method, Taylor series and
          method, Runge-Kutta, predictor-corrector methods, multi-step
          methods.Systems of equations and higher order equations.  Finite
          difference calculus:  Difference equations.
          <br /> <br />
          <strong>EA 311: INTRODUCTORY ENGINEERING STATISTICS (3 UNITS)</strong>
          <br />
          Measures of central tendency and dispersion, (grouped and ungrouped):
          mean - arithmetic, geometric, Harmonic; median; mode; quartiles,
          deciles and percentiles.  Emperical relation between mean, median and
          mode.Relative and absolute dispersion.Sample space and events as
          sets.Finite probability space.Properties of probability.Statistical
          independence and conditional probability.Tree diagram.Bayes
          theorem.Discrete and continuous random variables.Expectation. 
          Independent Bernoulli trails.  Binomial, Poisson and Normal
          Distributions.Normal approximation to Binomial and Poisson
          distributions.Hypergeometric.
          <br /> <br />
          <strong>EE 311: CIRCUIT THEORY I (3 UNITS)</strong> <br />
          Laplace and Fourier transforms, application of Laplace transformation
          to transient analysis of RLC circuits, transfer function concept,
          realisability of transfer functions, Foster and Cauers methods of
          synthesis 2-port network synthesis, active filters.  Analysis of
          continuous and discrete signals and systems.
          <br /> <br />
          <strong>EE 312: ANALOGUE ELECTRONIC CIRCUITS (3 UNITS)</strong> <br />
          Review of single stage transistor amplifiers and operational amplifier
          circuits. Analysis and design of multistage amplifiers. Feedback,
          Broadband and Narrow band amplifiers, power amplifiers, voltage and
          current stabilizing circuits.  Sinusoidal RC and LC and crystal
          oscillators, other communication circuits.
          <br /> <br />
          <strong>EE 313: ELECTROMAGNETIC FIELDS AND WAVES I (3 UNITS)</strong>
          <br />
          Review of electromagnetic laws in integral form, Gausss Law, Amperes
          and Faradays Laws; Electrostatic fields due to distribution of charge
          magnetic fields in and around current carrying conductors;
          Introduction to time varying magnetic and electric fields; conduction
          and displacement current, Maxwells equations (in rectangular
          coordinates and vector calculus notations.)
          <br /> <br />
          <strong>EE 314: TELECOMMUNICATION PRINCIPLES (3 UNITS)</strong> <br />
          Amplitude modulation; double sideband, single sideband, and vestigial
          sideband modulation schemes; simple modulators, power and bandwidth
          performance.  Angle modulation: frequency modulation, phase
          modulation, bandwidth requirement, clippers and limiters.  Amplitude
          modulated signal reception: Demodulation techniques, detectors, and
          noise performance.  Angle modulated signal reception: discrimination
          frequency tracking loop, phase locked loop and noise performance. 
          Commercial radio system.Transmission media; attenuation in open space,
          air, cable and fibre channels; construction of cables and
          fibres.Sampling theorem, pulse amplitude modulation, pulse code
          modulation, delta modulation, sources and correction of errors in PCM
          and DM, ideal and matched filters, frequency acquisition, phase
          referencing and timing.Line codes, block encoding and Shannons
          theorem.
          <br /> <br />
          <strong>EE 315: MEASUREMENTS AND INSTRUMENTATION (3 UNITS)</strong>
          <br />
          General instrumentation, Basic Meter in DC Measurements, Basic Meter
          in AC Measurements, rectifier voltmeter, electrodynamometer and
          wattmeter, instrument transformers; DC and AC bridges and their
          applications: general form of AC bridge, universal impedance bridge;
          Electronic Instruments for the Measurement of voltage, current,
          resistance and other circuit parameter: electronic voltmeters, AC
          voltmeters using rectifiers, electronic multimeter, digital
          voltmeters; oscilloscope: vertical deflection system, horizontal
          deflection system, probes, sampling CRO; Instruments for generating
          and analysing waveforms; square-wave and pulse generator, signal
          generators, function generators, wave analyzers; Electronic counters
          and their applications; time base circuitry, universal counter
          measurement modes; Analogue and digital data acquisition systems; tape
          recorders, D/A and A/D conversions, sample and hold circuits.
          <br /> <br />
          <strong>EE 316: TELECOMMUNICATIONS LABORATORY (1 UNIT)</strong> <br />
          A laboratory work on telecommunication principles and designed to
          illustrate topics covered in EE 314
          <br /> <br />
          <strong>EE 317: ELECTRICAL AND ELECTRONICS WORKSHOP (1 UNIT)</strong>
          <br />
          Passive and active components; service accessories and ratings; IC
          nomenclature, data sheets and application; Electrical and Electronics
          symbols; Use of testing and measuring instruments; safety engineering;
          workshops practice; Installation practice, prototyping and soldering
          Trouble-shooting; Introduction to manufacturing technology. 
          Illustrative project assignments.
        </p>
      </div>
    </article>
  );
};

export default FirstSemester;
