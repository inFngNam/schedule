import { useState } from 'react';

const Cell = ({ data }) => {
  const [content, setContent] = useState(data);
  const [clicked, setClicked] = useState(false);

  const handleOnClick = function () {
    setClicked(true);
  }

  const handleOnInput = function (e) {
    setContent(e.target.value);
    setClicked(false)
  }
  
  if (clicked) {
    return (
      <td style={{ width: '220px', height: '40px', padding: '0px 0px 0px' }} align={'center'}>
        <input
          type='text'
          defaultValue={content}
          style={{
            width: '90%',
            boxSizing: 'border-box',
            height: '90%',
            padding: '0px 0px 0px',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box'
          }}
          autoFocus={true}
          onBlur={handleOnInput}>
        </input>
      </td>);
  } else {
    return (<td style={{ width: '220px', height: '40px' }} align={'center'} onClick={handleOnClick}>{content}</td>)
  }
 };

export default Cell;