import Table from "rc-table";

const columns = [
  {
    title: "Source (%) (I)",
    dataIndex: "source",
    key: "source",
    width: 200,
    className: "py-3 px-2 border border-t border-primary-stroke",
  },
  {
    title: "Description (II)",
    dataIndex: "description",
    key: "age",
    width: 200,
    className: "py-3 px-2 border border-t border-primary-stroke",
  },
  {
    title: "Letter Grade (III)",
    dataIndex: "lg",
    key: "lg",
    width: 200,
    className: "py-3 px-2 border border-t border-primary-stroke",
  },
  {
    title: "Grade Point (GP) (IV)",
    dataIndex: "gp",
    key: "gp",
    width: 200,
    className: "py-3 px-2 border border-t border-primary-stroke",
  },
  {
    title: "Grade Point Average (GPA) (V)",
    dataIndex: "gpa",
    key: "gpa",
    width: 210,
    className: "py-3 px-5",
  },
  {
    title: "Cumulative Grade Point Average (CGPA) (VI)",
    dataIndex: "cgpa",
    key: "cgpa",
    width: 250,
    className: "py-3 px-2 border border-t border-primary-stroke",
  },
  {
    title: "Class of Degree (VII)",
    dataIndex: "cod",
    key: "cod",
    width: 200,
    className: "py-3 px-2 border border-t border-primary-stroke",
  },
];

const data = [
  {
    source: "70-100",
    description: "Excellent",
    lg: "A",
    gp: 5,
    gpa: "",
    cgpa: "4.5 - 5.0",
    cod: "First Class Hons.",
  },
  {
    source: "60-69",
    description: "Very Good",
    lg: "B",
    gp: 4,
    gpa: "Obtained By Multiplying",
    cgpa: "3.5 - 4.49",
    cod: "Second Class Hons. (Upper Division)",
  },
  {
    source: "50-59",
    description: "Good",
    lg: "C",
    gp: 3,
    gpa: "(I) and (V) And Dividing",
    cgpa: "2.4 - 3.49",
    cod: "Second Class Hons. (Lower Division)",
  },
  {
    source: "45-49",
    description: "Fair",
    lg: "D",
    gp: 2,
    gpa: "By Total Credit Units",
    cgpa: "1.5 - 2.39",
    cod: "Third Class Hons.",
  },
  {
    source: "40-44",
    description: "Pass",
    lg: "E",
    gp: 1,
    gpa: "",
    cgpa: "1.0 - 1.49",
    cod: "Pass",
  },
  {
    source: "0-39",
    description: "Fail",
    lg: "F",
    gp: 0,
    gpa: "",
    cgpa: "< 1",
    cod: "Fail",
  },
];

const GradingTable = () => {
  return (
    <Table
      columns={columns}
      data={data}
      className="text-sm text-center border border-primary-stroke"
      rowKey={(record) => record.lg}
    />
  );
};

export default GradingTable;
