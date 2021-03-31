import { Clock } from './Clock';
import { Timer } from './Task';

export const TableFoot = () => {
  return (
    <tfoot style={{ display: 'fixed' }}>
      <tr>
        <td colSpan='2'>
          <Clock time={new Date()}></Clock>
        </td>
        <td colSpan='3' style={{ position:'fixed' }}>
          <Timer></Timer>
        </td>
      </tr>
    </tfoot>
  )
};