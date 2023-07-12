import Table from "rc-table";
import { tableColumns } from "../../../data";

const firstData = [
  {
    cd: "CCE411",
    ct: "Computer Programming and Knowledge Based System",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE412",
    ct: "Project and Seminar I",
    cu: 2,
    pr: "EE311, EE312",
  },
  {
    cd: "CCE413",
    ct: "Database Management System",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE414",
    ct: "Computer & Communication Network",
    cu: 2,
    pr: "-",
  },
  {
    cd: "CCE415",
    ct: "Soft Computing Techniques",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EE411",
    ct: "Control Engineering I",
    cu: 3,
    pr: "EE311",
  },

  {
    cd: "EE413",
    ct: "Digital Systems",
    cu: 3,
    pr: "-",
  },
  {
    cd: "EE414",
    ct: "Analogue Circuit Design",
    cu: 3,
    pr: "EE312",
  },
  {
    cd: "EE415",
    ct: "Physical Electronics",
    cu: 3,
    pr: "-",
  },
  {
    cd: "EE417",
    ct: "Digital Systems Laboratory",
    cu: 1,
    pr: "-",
  },
  {
    cd: "EE418",
    ct: "Control Engineering Laboratory",
    cu: 1,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 24,
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

export { FirstSemesterTable };

// {
//   cd: '',
//   ct: '',
//   cu: 3,
//   pr: '-'
// },
