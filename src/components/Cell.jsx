import { useState } from 'react';

const Cell = ({ data, setUpdate }) => {
  const [content, setContent] = useState(data);
  const [clicked, setClicked] = useState(false);

  const handleOnClick = function () {
    setClicked(true);
  }

  const handleOnInput = function (e) {
    setContent(e.target.value);
    setClicked(false);
  }
  
  if (clicked) {
    return (
      <td style={{ width: '220px', height: '40px', padding: '0px 0px 0px', border: '2px solid #ffffff'}} align={'center'}>
        <input
          type='text'
          defaultValue={content}
          style={{
            width: '95%',
            boxSizing: 'border-box',
            height: '95%',
            padding: '0px 0px 0px 0px',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box'
          }}
          autoFocus={true}
          onBlur={handleOnInput}>
        </input>
      </td>);
  } else {
    return (<td style={{ width: '220px', height: '40px', border: '2px solid #ffffff' }} align={'center'} onClick={handleOnClick}>{content}</td>)
  }
 };

export default Cell;