import React, { useState } from "react";

const Cell = ({content}) => {
  const [data, setData] = useState(content);
  const [clicked, setClicked] = useState(false);
  function handleOnClick(){
    setClicked(true)
  }

  function handleOnInput(e){
    setData(e.target.value)
    setClicked(false)
  }


  if(clicked === false)
  {
    return (
      <div  style={{ width: "150px", height: "41px", }} onClick={handleOnClick}> {data} </div>
    );
  }
    return (
       <input 
        type="text" 
        style={{ 
          width: "130px",
          padding:"0px 0px 0px"
        }}
        defaultValue = {data}
        autoFocus={true}
        onBlur={handleOnInput}>
      </input>
  );
};


Cell.propTypes = {
  content: String
};


export default Cell;