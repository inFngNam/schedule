import { useState } from 'react';

export const Clock = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  setInterval(() => { setCurrentTime(new Date()) }, 1000)
  return (
    <div style={{ alignContent: 'baseline', alignItems: 'baseline' }}>
      <p style={{ margin:'5px 0px 0px', textAlign:'left' }}> {currentTime.toDateString()} </p>
      <p style={{ margin: '5px 0px 0px', textAlign: 'left', alignItems: 'end' }}>
        {currentTime.getHours() > 10 ? currentTime.getHours() : `0${currentTime.getHours()}`}:
        {currentTime.getMinutes() > 10 ? currentTime.getMinutes() : `0${currentTime.getMinutes()}`}:
        {currentTime.getSeconds() > 10 ? currentTime.getSeconds() : `0${currentTime.getSeconds()}`}
      </p>
    </div>
  );
};