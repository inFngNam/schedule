import Cell from "./Cell";
import TimeRangeCell from "./TimeRangeCell";

export const TableBody = (props) => {
  const rows = [...new Array(18)];
  const columns = [...new Array(9)];
  console.log("in")

  return (
    <tbody>
      {rows.map((value, row) =>
        <tr key={row} style={{border: '2px solid #ffffff'}}>
          {columns.map((val, column) =>
            column === 0 ? <td key={`${row}_${column}`} style={{border: '2px solid #ffffff'}}>{row + 1}</td> :
              column === 1 ? <TimeRangeCell key={`${row}_${column}`} time={row + 6}></TimeRangeCell> :
                            <Cell key={`${row}_${column}`} data={column}></Cell>)
          }
        </tr>
      )}
    </tbody>
  )
}