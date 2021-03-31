import { useState } from 'react';

export const Clock = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(time)
  setInterval(() => { setCurrentTime(new Date()) }, 1000)
  return (
    <div style={{ alignContent: 'baseline', alignItems: 'baseline' }}>
      <p style={{ margin:'5px 0px 0px', textAlign:'left' }}> {currentTime.toDateString()} </p>
      <p style={{ margin:'5px 0px 0px', textAlign:'left', alignItems: 'end' }}> {currentTime.toLocaleTimeString()} </p>
    </div>
  );
};