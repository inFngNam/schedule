import { useState } from 'react';

export const Timer = ({ time }) => {
  const [isStart, setStart] = useState(false);

  const startTask = () => {
    setStart(true);
    // const taskName = ReactDOM.
  };

  if (isStart === false) {
    return (
      <div>
        <form>
          <label style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', fontSize: '24px', marginTop: '5px'
          }}>
            Task name:
            <input
              type='text'
              style={{
                marginLeft: '10px',
                width: '200px',
                height: '25px',
                textAlignLast: 'left',
                fontSize: '14px',
                padding: '0px 0px 0px 0px'
              }}
              id='task-name'>
            </input>
          </label>
          <label style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'end', fontSize: '24px', marginTop: '5px'
          }}>
            End Time:
            <input
              type='time'
              style={{
                margin: '0px 10px 0px 22px',
                height: '25px',
                textAlignLast: 'left',
                padding: '0px 0px 0px 0px'
              }}
              id='input-time'>
            </input>
            <button
              type='button'
              onClick={startTask}
              style={{
                marginLeft: '3px',
                height: '34px'
              }}>
              Start
            </button>
          </label>
        </form>
      </div>
    )
  } else {
  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
          {/* <button type='button' onClick={ handleRestart } style={{ width: '112px' }}>Restart</button> */}
        {/* <button type='button' onClick={ handlePause } style={{ width: '112px' }}> { isPause === false ? 'Pause' : 'Resume'}</button> */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {time}
      </div>
    </div>
  );
  }
};