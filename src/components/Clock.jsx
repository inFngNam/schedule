import { useState } from 'react';

export const Clock = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(time)

  setInterval(() => {
    setCurrentTime(new Date(), 1000)
  })
    
  return (
    <div style={{alignContent: 'baseline', alignItems: 'baseline'}}>
      <p style={{margin:'0px 0px 0px'}}> {new Date().toDateString()} </p>
      <p style={{margin:'0px 0px 0px', textAlign:'left'}} > {currentTime.toLocaleTimeString()} </p>
    </div>
  );
};