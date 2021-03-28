const header = [
  "",
  "Time",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const TableHead = () => {
  return (
    <thead>
      <tr>
        {header.map((val, index) => (
          <th key={index} style={{ border: "2px solid #ffffff", width: index === 0 ? "25px" : "220px" }}> {val} </th>
        ))}
      </tr>
    </thead>
  );
};