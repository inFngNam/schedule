import Cell from "./Cell";
import TimeRange from "./TimeRange";

export const TableBody = (props) => {
  const rows = [...new Array(18)];
  const columns = [...new Array(9)];
  console.log("in")

  return (
    <tbody>
      {rows.map((value, row) =>
        <tr key={row} >
          {columns.map((val, column) =>
            column === 0 ? <td key={`${row}_${column}`}>{row + 1}</td> :
              column === 1 ? <TimeRange key={`${row}_${column}`} time={row + 6} ></TimeRange> :
                            <Cell key={`${row}_${column}`} data={column}></Cell>)
          }
        </tr>
      )}
    </tbody>
  )
}