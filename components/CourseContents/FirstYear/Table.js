import Table from "rc-table";
import { tableColumns } from "../../../data";

const firstData = [
  {
    cd: "Mth111",
    ct: "Elementry Algebra I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Mth112",
    ct: "Calculus I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Phy117",
    ct: "Basic Experimental Physics I",
    cu: 1,
    pr: "-",
  },
  {
    cd: "Phy111",
    ct: "Introductory  Mechanics and Properties of Matter",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Phy 113",
    ct: "Introductory to Heat, Wave, Motion and Sound",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Chm111",
    ct: "Foundation Chemistry I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Chm113",
    ct: "Practical Chemistry I",
    cu: 1,
    pr: "-",
  },
  {
    cd: "Gns111",
    ct: "Use of English I",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Gns211",
    ct: "Information Science ",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 21,
    pr: "",
  },
];

const secondData = [
  {
    cd: "Mth121",
    ct: "Elementry Algebra II",
    cu: 4,
    pr: "-",
  },
  {
    cd: "Mth122",
    ct: "Calculus II",
    cu: 4,
    pr: "-",
  },
  {
    cd: "Phy127",
    ct: "Basic Experimental Physics II",
    cu: 1,
    pr: "-",
  },
  {
    cd: "Phy126",
    ct: "Introductory Electricity and Magnetism",
    cu: 3,
    pr: "-",
  },

  {
    cd: "Chm121",
    ct: "Foundation Chemistry II",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Chm123",
    ct: "Practical Chemistry II",
    cu: 1,
    pr: "-",
  },
  {
    cd: "Gns121",
    ct: "Use of English II",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Gns221",
    ct: "Nigeria People and Culture In the Context of African History",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Cs142",
    ct: "Introductory Computer Science",
    cu: 3,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 23,
    pr: "",
  },
];

const FirstSemesterTable = () => {
  return (
    <div className="overflow-x-scroll sm:overflow-x-auto pb-5">
      <Table
        columns={tableColumns}
        data={firstData}
        className="text-[13px] sm:text-sm text-center uppercase mt-5"
        rowKey={(record) => record.cd}
      />{" "}
    </div>
  );
};

const SecondSemesterTable = () => {
  return (
    <div className="overflow-x-scroll sm:overflow-x-auto pb-5">
      <Table
        columns={tableColumns}
        data={secondData}
        className="text-[13px] sm:text-sm text-center uppercase mt-5"
        rowKey={(record) => record.cd}
      />{" "}
    </div>
  );
};

export { FirstSemesterTable, SecondSemesterTable };

// {
//   cd: '',
//   ct: '',
//   cu: 3,
//   pr: '-'
// },
