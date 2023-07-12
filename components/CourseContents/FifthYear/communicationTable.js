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
    cd: "CCE513",
    ct: "Industrial Electronics",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE516",
    ct: "Optical Communication System",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE517",
    ct: "Satellite Communication",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE518",
    ct: "Wireless & Mobile Communication",
    cu: 3,
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
    cd: "EE508",
    ct: "Microwave Engineering",
    cu: 3,
    pr: "-",
  },
  {
    cd: "EE509",
    ct: "Microwave Engineering Laboratory",
    cu: 1,
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
    cu: 25,
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
    cd: "CCE522",
    ct: "Electronics Material Technology",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE525",
    ct: "Telecommunication Engineering",
    cu: 2,
    pr: "EE508",
  },
  {
    cd: "CCE526",
    ct: "Digital Communication System",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE527",
    ct: "Image and Data Transmission System",
    cu: 2,
    pr: "EE312",
  },
  {
    cd: "CCE528",
    ct: "Communication Systems Planning",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE540",
    ct: "Telecommunication Services Design",
    cu: 2,
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
    cu: 21,
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
