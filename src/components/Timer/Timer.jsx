  import React from "react";
  
  export default function Timer({ hours, minutes, seconds}) {

  

  return (
    <div>
      <p>
        {`${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`} </p>
   </div>
      
  );
};