import rows from '../data.json';
import Cell from './Cell';
import TimeRangeCell from './TimeRangeCell';

export const TableBody = (props) => {

  return (
    <tbody>
      {rows.map((row, rowIndex) =>
        <tr key={rowIndex} style={{border: '2px solid #ffffff'}}>
          {row.map((cellValue, columnIndex) =>
            columnIndex === 0 ?
              <td key={`${rowIndex}_${columnIndex}`} style={{ border: '2px solid #ffffff' }}>{rowIndex + 1}</td> :
              columnIndex === 1 ?
                <TimeRangeCell key={`${rowIndex}_${columnIndex}`} time={rowIndex + 6}></TimeRangeCell> :
                <Cell key={`${rowIndex}_${columnIndex}`} data={cellValue}></Cell>)
          }
        </tr>
      )}
    </tbody>
  )
}