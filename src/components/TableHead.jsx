const headers = [
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
        {headers.map((header, index) => (
          <th key={index} style={{ border: "2px solid #ffffff", width: index === 0 ? "50px" : "220px" }}> {header} </th>
        ))}
      </tr>
    </thead>
  );
};