import { useState } from 'react';

export const Clock = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(time)

  setInterval(() => {
    setCurrentTime(new Date(), 1000)
  })
    
  return (
    <div>
      {currentTime.toLocaleTimeString()}
    </div>
  );
};