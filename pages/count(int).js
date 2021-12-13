 import React, { useState } from "react";
 export default function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
        Count: {count}<br></br>
        <botton class="kadomaru" onClick={()=>setCount(count+1)}>+</botton>
        <botton class="kadomaru" onClick={()=>setCount(0)}>reset</botton>
       
        
      </>
    );
  }
  