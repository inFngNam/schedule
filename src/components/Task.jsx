import { useState } from 'react';

export const Timer = ({ time }) => {
  const [isStart, setStart] = useState(false);
  const [isValidate, setValidate] = useState(true);
  const [taskName, setTaskName] = useState('');
  const [expectedEndTime, setExpectedEndTime] = useState(new Date());

  const startTask = (event) => {
    const currentTime = new Date();
    const inputExpectedHour = event.target[1].value;
    const inputExpectedMinute = event.target[2].value;
    const inputExpectedEndTime = new Date(currentTime.toLocaleDateString() + ` ${inputExpectedHour}:${inputExpectedMinute}`);
    if (inputExpectedEndTime.getTime() > currentTime.getTime()) {
      setExpectedEndTime(inputExpectedEndTime);
      setTaskName(event.target[0].value);
      setStart(true);
    } else {
      setValidate(false);
    }
    event.preventDefault();
  };

  const stopTask = () => {
    setValidate(true);
    setStart(false);
  };

  if (isStart === false) {
    return (
      <div>
        <form onSubmit={startTask}>
          <label style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', fontSize: '24px', marginTop: '5px'
          }}>
            Task name:
            <input
              autoComplete='off'
              type='text'
              style={{
                marginLeft: '10px',
                width: '200px',
                height: '25px',
                textAlignLast: 'left',
                fontSize: '14px',
                padding: '0px 0px 0px 0px',
              }}
              placeholder='Input task name'
              required
              id='task-name'>
            </input>
          </label>
          <label style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'end', fontSize: '24px', marginTop: '5px'
          }}>
            End Time:
            <input
              type='number'
              style={{
                margin: '0px 5px 0px 22px',
                width: '35px',
                height: '25px',
                textAlignLast: 'left',
                padding: '0px 0px 0px 0px',
              }}
              min={new Date().getHours()}
              max='23'
              required
              id='expected-end-time-hour'>
            </input>
            :
            <input
              type='number'
              style={{
                margin: '0px 10px 0px 5px',
                width: '35px',
                height: '25px',
                textAlignLast: 'left',
                padding: '0px 0px 0px 0px',
              }}
              min='0'
              max='59'
              required
              id='expected-end-time-minute'>
            </input>
            <input type='submit' value='Submit' style={{ height: '34px', width: '88px', padding: '0px 0px 0px 0px' }}>
            </input>
          </label>
        </form>
        <p style={{
          padding: '0px 0px 0px 0px',
          margin: '0px 0px 0px 0px',
          textAlign: 'right',
          color: 'red',
          fontSize: '16px'
          }}
          hidden={ isValidate }
        > Wrong input </p>
      </div>
    )
  } else {
  return (
    <div style={{ alignContent: 'baseline', alignItems: 'baseline'  }}>
      <p style={{ margin: '5px 0px 0px', textAlign: 'left' }}>
        {taskName} 
        ({expectedEndTime.getHours() > 10 ? expectedEndTime.getHours() : `0${expectedEndTime.getHours()}`}:
        {expectedEndTime.getMinutes() > 10 ? expectedEndTime.getMinutes() : `0${expectedEndTime.getMinutes()}`})
      </p>
      <button type='submit' onClick={stopTask}>Done</button>
    </div>
  );
  }
};