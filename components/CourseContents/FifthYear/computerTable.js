import Table from "rc-table";
import { tableColumns } from "../../../data";

const firstData = [
  {
    cd: "CCE510",
    ct: "Project and Seminar II",
    cu: "-",
    pr: "EIT430",
  },
  {
    cd: "CCE511",
    ct: "System Programming",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE512",
    ct: "Internet Technology & Programming",
    cu: 2,
    pr: "-",
  },

  {
    cd: "CCE513",
    ct: "Industrial Electronics",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE514",
    ct: "Computer Architecture",
    cu: 3,
    pr: "EE413",
  },
  {
    cd: "CCE515",
    ct: "Introduction to Artificial Intelligence",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EE501",
    ct: "Control Engineering II",
    cu: 3,
    pr: "EE411",
  },
  {
    cd: "EE502",
    ct: "Microcomputer & Microprocessor Systems",
    cu: 3,
    pr: "EE413",
  },
  {
    cd: "EE507",
    ct: "Digital Signal Processing",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EE513",
    ct: "Microcomputer & Microprocessor Systems Laboratory",
    cu: 1,
    pr: "-",
  },
  {
    cd: "",
    ct: "Elective Course",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 23,
    pr: "-",
  },
];

const secondData = [
  {
    cd: "CCE510",
    ct: "Project and Seminar II",
    cu: 4,
    pr: "EIT430",
  },
  {
    cd: "CCE520",
    ct: "Software Engineering",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE521",
    ct: "Programming and Languages",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE522",
    ct: "Electronics Material Technology",
    cu: 2,
    pr: "EE415",
  },
  {
    cd: "CCE523",
    ct: "Microprogramming",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE524",
    ct: "Cryptography & Network Security",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE529",
    ct: "Embedded System Design",
    cu: 3,
    pr: "-",
  },
  {
    cd: "EE523",
    ct: "System Reliability & Maintainability",
    cu: 2,
    pr: "-",
  },
  {
    cd: "",
    ct: "Elective Course",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 22,
    pr: "-",
  },
];

const firstElective = [
  {
    cd: "ST371",
    ct: "Probability Theory I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "ST372",
    ct: "Optimization Theory",
    cu: 3,
    pr: "-",
  },
  {
    cd: "MTH336",
    ct: "Operations Research I",
    cu: 3,
    pr: "-",
  },
];

const secondElective = [
  {
    cd: "ST382",
    ct: "Probability Theory II",
    cu: 3,
    pr: "-",
  },
  {
    cd: "ST381",
    ct: "Time Series & Index",
    cu: 3,
    pr: "-",
  },
  {
    cd: "MTH346",
    ct: "Operations Research II",
    cu: 3,
    pr: "-",
  },
];

const FirstSemesterTable = () => {
  return (
    <Table
      columns={tableColumns}
      data={firstData}
      className="mx-auto text-sm text-center uppercase"
      rowKey={(record) => record.cd}
    />
  );
};

const SecondSemesterTable = () => {
  return (
    <Table
      columns={tableColumns}
      data={secondData}
      className="mx-auto text-sm text-center uppercase"
      rowKey={(record) => record.cd}
    />
  );
};

const FirstElectiveTable = () => {
  return (
    <Table
      columns={tableColumns}
      data={firstElective}
      className="mx-auto mt-2 text-sm text-center uppercase"
      rowKey={(record) => record.cd}
    />
  );
};

const SecondElectiveTable = () => {
  return (
    <Table
      columns={tableColumns}
      data={firstElective}
      className="mx-auto mt-2 text-sm text-center uppercase"
      rowKey={(record) => record.cd}
    />
  );
};

export {
  FirstSemesterTable,
  SecondSemesterTable,
  FirstElectiveTable,
  SecondElectiveTable,
};

// {
//   cd: '',
//   ct: '',
//   cu: 3,
//   pr: '-'
// },
