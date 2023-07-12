import Table from "rc-table";
import { tableColumns } from "../../../data";

const firstData = [
  {
    cd: "MTH337",
    ct: "Numerical Analysis",
    cu: 3,
    pr: "Mth212",
  },
  {
    cd: "EA311",
    ct: "Introduction to Engineering Statistics",
    cu: 3,
    pr: "-",
  },
  {
    cd: "EE311",
    ct: "Circuit Theory I",
    cu: 3,
    pr: "EE211",
  },
  {
    cd: "EE312",
    ct: "Analogue Electronic Circuits",
    cu: 3,
    pr: "EE222",
  },
  {
    cd: "EE313",
    ct: "Electromagnetic Fields & Waves I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "EE314",
    ct: "Telecommunication Principles",
    cu: 3,
    pr: "-",
  },

  {
    cd: "EE315",
    ct: "Measurement & Instrumentation",
    cu: 3,
    pr: "EE222",
  },
  {
    cd: "EE316",
    ct: "Telecommunication Laboratory",
    cu: 1,
    pr: "-",
  },
  {
    cd: "EE317",
    ct: "Electrical & Electronics Workshop",
    cu: 1,
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
    cd: "MTH323",
    ct: "Complex Analysis I",
    cu: 3,
    pr: "Mth212",
  },
  {
    cd: "EA321",
    ct: "Topics In Engineering Mathematics",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EE321",
    ct: "Electrical Machines II",
    cu: 4,
    pr: "EE222",
  },
  {
    cd: "EE322",
    ct: "Digital Electronics",
    cu: 3,
    pr: "EE222",
  },
  {
    cd: "EE323",
    ct: "Circuit Theory II",
    cu: 3,
    pr: "EE311",
  },

  {
    cd: "EE324",
    ct: "Electromagnetic Fields & Waves II",
    cu: 3,
    pr: "EE313",
  },
  {
    cd: "EE325",
    ct: "Electrical Machines Laboratory",
    cu: 1,
    pr: "-",
  },
  {
    cd: "EE326",
    ct: "Analogue/Digital Electronics Laboratory",
    cu: 1,
    pr: "-",
  },
  {
    cd: "EE327",
    ct: "Measurement / Instrumentation Laboratory",
    cu: 1,
    pr: "EE315",
  },
  {
    cd: "GNS321",
    ct: "Business Creation and Growth",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 23,
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

export { FirstSemesterTable, SecondSemesterTable };

// {
//   cd: '',
//   ct: '',
//   cu: 3,
//   pr: '-'
// },
