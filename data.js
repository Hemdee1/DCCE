export const HeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Staff",
    link: "/staff",
  },
  {
    id: 3,
    title: "Admissions",
    link: "/admissions",
  },
  {
    id: 4,
    title: "Guidelines",
    link: "/guidelines",
  },
  {
    id: 5,
    title: "Course Content",
    link: "/course-content",
  },
  {
    id: 6,
    title: "Approved Projects",
    link: "/approved-projects",
  },
];

export const academicStaffs = [
  {
    id: 1,
    name: "Prof.O.U. Okereke",
    certification: "B. Sc., M. Sc., Ph. D",
    title: "Professor",
    img: "/images/staffs/okereke.png",
  },
  {
    id: 2,
    name: "Engr. Dr. Murtala Aminu Baba",
    certification: "B. Sc., M. Sc., Ph. D",
    title: "Senior Lecturer/ Head of Department",
    img: "/images/staffs/murtala.png",
  },
  {
    id: 3,
    name: "Engr. Kabiru Ibrahim Jahun",
    certification: "B. Eng., M.Eng.",
    title: "Lecturer I/Record/Registration Officer/ I.T. Officer",
    img: "/images/staffs/jahun.png",
  },
  {
    id: 4,
    name: "Engr. Usman Bature Isyaku",
    certification: "B. Eng., M. Eng.",
    title: "Lecturer I /Project Coordinator",
    img: "/images/staffs/bature.png",
  },
  {
    id: 5,
    name: "Engr. Nasir Abubakar Yakub",
    certification: "B. Eng., M. Eng.",
    title: "Lecturer I",
    img: "/images/staffs/nasir.png",
  },
  {
    id: 6,
    name: "Engr. Dr. Dala Aliyu Bukar",
    certification: "B. Sc., M. Sc., Ph. D",
    title: "Lecturer I",
    img: "",
  },
  {
    id: 7,
    name: "Engr. Usman Saleh Toro",
    certification: "B. Eng., M.Sc.",
    title: "Lecturer I",
    img: "",
  },
  {
    id: 8,
    name: "Engr. Abbas Musa Hassan",
    certification: "B. Eng.",
    title: "Lecturer II/Examination Officer",
    img: "/images/staffs/abbas.png",
  },
];

export const technicalStaff = [
  {
    id: 9,
    name: "Aliyu Mahmood",
    certification: "Msc.",
    title: "Senior Lab. Tech.",
    img: "",
  },
  {
    id: 10,
    name: "Bashir I. Zwall",
    certification: "Bsc.",
    title: "Principal Lab. Tech.",
    img: "",
  },
  {
    id: 11,
    name: "Usman Umar Lamido",
    certification: "Agro Meteorological Directorate",
    title: "Lab. Tech. I",
    img: "",
  },
];

export const nonAcademicStaff = [
  {
    id: 12,
    name: "Emmanuel",
    certification: "Diploma",
    title: "Chief Confidential Secretary",
    img: "",
  },
  {
    id: 13,
    name: "Hassan Mohammed",
    certification: "Certificate",
    title: "Senior Clerical Officer",
    img: "",
  },
];

export const footerLinks = [
  {
    title: "Atbu",
    links: [
      {
        title: "Faculty of Engineering",
        link: "/engineering",
      },
    ],
  },
  {
    title: "Staff",
    links: [
      {
        title: "academic",
        link: "/staff#academic",
      },
      {
        title: "technical",
        link: "/staff#technical",
      },
      {
        title: "non-academic",
        link: "/staff#non-academic",
      },
    ],
  },
  {
    title: "admissions and guidelines",
    links: [
      {
        title: "entry requirements",
        query: "entry requirements",
        link: "/admissions",
      },
      {
        title: "degree nomenclature",
        query: "degree nomenclature",
        link: "/admissions",
      },
      {
        title: "grading system",
        query: "grading system",
        link: "/admissions",
      },
      {
        title: "duration of course",
        query: "duration of course",
        link: "/admissions",
      },
      {
        title: "exam guidelines",
        link: "/guidelines",
      },
    ],
  },
  {
    title: "course content",
    links: [
      {
        title: "100L",
        query: "100L",
        link: "/course-content",
      },
      {
        title: "200L",
        query: "200L",
        link: "/course-content",
      },
      {
        title: "300L",
        query: "300L",
        link: "/course-content",
      },
      {
        title: "400L",
        query: "400L",
        link: "/course-content",
      },
      {
        title: "500L",
        query: "500L",
        link: "/course-content",
      },
    ],
  },
];

export const tableColumns = [
  {
    title: "Course Code",
    dataIndex: "cd",
    key: "cd",
    width: 200,
    className: "py-3 px-2 border-2 border-primary-stroke",
  },
  {
    title: "Course Title",
    dataIndex: "ct",
    key: "ct",
    width: 600,
    className: "py-3 px-2 border-2 border-primary-stroke",
  },

  {
    title: "Credit Units",
    dataIndex: "cu",
    key: "cu",
    width: 200,
    className: "py-3 px-2 border-2 border-primary-stroke",
  },
  {
    title: "Pre - Requisite",
    dataIndex: "pr",
    key: "pr",
    width: 200,
    className: "py-3 px-2 border-2 border-primary-stroke",
  },
];

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    type: "tween",
    duration: 0.5,
  },
};

export const approvedProjects = [
  {
    lecturer: "Engr. Prof. O. U. Okereke",
    projects: [
      {
        project:
          "Design And Construction Of Six Element Yagi-Uda Linear Active Antenna",
        name: "ANDY Wabida Elijah",
      },
      {
        project:
          "Design And Construction Of Density Based Traffic Light Control System",
        name: "MEDUGU Innocent Yohanna",
      },
      {
        project: "RF Based Appliances Control System Using Microcontroller",
        name: "KINGHAM Maria",
      },
      {
        project: "Design And Construction Of Digital Tachometer",
        name: "SUNUSI Abubakar",
      },
      {
        project:
          "Design And Implementation Of An Iot Based Street Light Control System",
        name: "Dabit Innocent John",
      },
    ],
  },
  {
    lecturer: "Engr. Prof. C. Ngene",
    projects: [
      {
        project: "Toll Gate Access Control Using Arduino",
        name: "ELI Tugga Samson",
      },
      {
        project:
          "Design And Construction Of Turbidity Meter Using LCD To Display The Water Level",
        name: "ELISHA Hyellamupanyi",
      },
      {
        project: "Automatic Irrigation System Using Microcontroller",
        name: "MICHAEL Wisdom Tobechukwu",
      },
      {
        project:
          "Arduino based Smart Walking stick for the blind (Moisture sensor)",
        name: "ABDURRAHMAN Said",
      },
      {
        project: "Design And Implementation Of Human Speed Detection",
        name: "BELLO Murtala Muhammad",
      },
      {
        project:
          "Development Of A Soil Fertility Prediction System Using Grediant Boost Algorithm",
        name: "KURAH M. Godwin",
      },
    ],
  },
  {
    lecturer: "Engr. Dr. M.A Baba",
    projects: [
      {
        project:
          "Design and construction of fingerprint/electronics voting system",
        name: "BELLO Walid Yakubu",
      },
      {
        project:
          "Design And Construction Of Noise Level Monitoring And Alerting System With Audio Feedback",
        name: "ISMAIL Masud Yusuf",
      },
      {
        project:
          "Design And Construction Of Weather Monitoring System Based On GSM",
        name: "ABUBAKAR Suleiman Audu",
      },
      {
        project: "Vehicle Tracker Using Arduino",
        name: "TUTA Godwin Aondohemba",
      },
      {
        project: "Fingerprint Based Car Ignition System",
        name: "JALAM Aliyu Sudais",
      },
    ],
  },
  {
    lecturer: "Engr. K.I Jahun",
    projects: [
      {
        project: "Automatic Medicine Reminder",
        name: "HABIB Abdulqadir Idris",
      },
      {
        project:
          "Design And Implementation Of Android Application Based Bluetooth Controlled Robotic Car",
        name: "USMAN Aliyu Hamma",
      },
      {
        project: "Sun Tracking Solar Panel",
        name: "SANI Abdulrazzaq Usman",
      },
      {
        project: "Design Of Touch Activated Car Alarm",
        name: "ABDUL RAHMAN Muftau Alade",
      },
      {
        project:
          "Design and construction of an OTP based door access control system using microcontroller",
        name: "ABUBAKAR Ibrahim Yaya",
      },
      {
        project: "Automatic Fish Feeder Using Micro-controller",
        name: "INUSA Idris Abdullahi",
      },
      {
        project:
          "Design and construction of an Android based Automatic sector Antenna positioning using ATMEGA",
        name: "GURANGS Jordan Minister",
      },
      {
        project: "Facial Recognition System Using Python",
        name: "USMAN Ahmadu",
      },
      {
        project: "Water Tank Overflow Audio-Virtual Indicator",
        name: "USMAN Inuwa Ibrahim",
      },
      {
        project: "Smart Road Safety and Vehicle Accident Preventive System",
        name: "YAKUBU Ehud Yakubu",
      },
    ],
  },
  {
    lecturer: "Engr. U.S. Toro",
    projects: [
      {
        project:
          "Design and Implementation of school Security Database Management system",
        name: "AYUBA Huzaifa",
      },
      {
        project: "Smartphone Based Human Activity Recognition",
        name: "MUHAMMAD Najib",
      },
      {
        project: "Design And Development Of Temporary Student Identity Card",
        name: "SANUSI Muhyideen Olayemi",
      },
      {
        project: "Smoke Detector with audio and liquid Dispenser",
        name: "AUWAL Abdullahi",
      },
      {
        project: "Home Automation Using Gesture Control (Arduino-Based)",
        name: "ABDULRAZAQ Ibrahim",
      },
      {
        project: "Design And Implementation Of Mobile Phone Based Step Counter",
        name: "GADDAPHY Muhammed Lawal",
      },
    ],
  },
  {
    lecturer: "Engr. A.M. Hassan",
    projects: [
      {
        project:
          "Design And Implementation Of Automatic Traffic Light Control System",
        name: "MUHAMMED Haidar Aliyu",
      },
      {
        project:
          "design and implementation of Departmental  student handbook Web application",
        name: "AHMED Mohammed Umar",
      },
      {
        project: "IOT Based Transformer Monitoring System",
        name: "ABBAS Ibrahim",
      },
      {
        project:
          "Design And Construction Of Dual Access Security Control system",
        name: "ABDULMUMINI Muktari",
      },
      {
        project:
          "Design And Construction Of Microcontroller Based Laboratory Incubator",
        name: "JIBRIN Aliyu Muhammad",
      },
    ],
  },
];
