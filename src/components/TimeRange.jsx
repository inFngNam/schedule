import React from 'react';


const TimeRange = ({ time }) => {
  const startTime = time > 9 ? `${time}:00` : `0${time}:00`;
  const endTime = time + 1  > 9 ? time === 24 ? "00:00" : `${time}:00` : `0${time + 1}:00`;

  return (
    <td>
      {startTime} - {endTime}
    </td>
  )
};

export default TimeRange;
