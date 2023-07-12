import Table from "rc-table";
import { tableColumns } from "../../../data";

const firstData = [
  {
    cd: "CE211",
    ct: "Strength of Materials I",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EE211",
    ct: "Electrical Engineering Fundamentals I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "ME211",
    ct: "Engineering Mechanics I",
    cu: 2,
    pr: "-",
  },
  {
    cd: "ME212",
    ct: "Engineering Drawing I",
    cu: 2,
    pr: "-",
  },
  {
    cd: "ME213",
    ct: "Thermo Sciences I",
    cu: 2,
    pr: "-",
  },

  {
    cd: "ME214",
    ct: "Workshop Practice I",
    cu: 1,
    pr: "-",
  },
  {
    cd: "MTH212",
    ct: "Mathematical Methods I",
    cu: 3,
    pr: "Mth122",
  },
  {
    cd: "GNS311",
    ct: "Enterpreneurship and innovation",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EG210",
    ct: "Engineering Laboratories I",
    cu: 3,
    pr: "-",
  },
  {
    cd: "ES217",
    ct: "Engineer-in-Society",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 22,
    pr: "",
  },
];

const secondData = [
  {
    cd: "CE222",
    ct: "Strength of Materials II",
    cu: 2,
    pr: "CE211",
  },
  {
    cd: "CE223",
    ct: "Engineering Hydromechanics",
    cu: 2,
    pr: "-",
  },
  {
    cd: "EE222",
    ct: "Electrical Engineering Fundamentals II",
    cu: 3,
    pr: "EE211",
  },
  {
    cd: "ME222",
    ct: "Engineering Mechanics II",
    cu: 2,
    pr: "ME211",
  },
  {
    cd: "ME223",
    ct: "Engineering Drawing II",
    cu: 2,
    pr: "ME212",
  },
  {
    cd: "ME224",
    ct: "Thermo Sciences II",
    cu: 2,
    pr: "ME213",
  },

  {
    cd: "ME225",
    ct: "Workshop Practice II",
    cu: 1,
    pr: "-",
  },
  {
    cd: "MTH222",
    ct: "Mathematical Methods II",
    cu: 3,
    pr: "Mth212",
  },
  {
    cd: "EG220",
    ct: "Engineering Laboratories II",
    cu: 3,
    pr: "-",
  },
  {
    cd: "ME226",
    ct: "Material Science",
    cu: 2,
    pr: "-",
  },
  {
    cd: "GNS222",
    ct: "Peace and conflict resolution studies",
    cu: 2,
    pr: "-",
  },
  {
    cd: "Total Units",
    ct: "",
    cu: 24,
    pr: "",
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
