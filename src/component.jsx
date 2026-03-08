 import { useState } from "react";
 const Count=()=>{
    const[count,setCount]=useState(0);
    const[rcount,rsetCount]=useState(10);
    return(
        <div>
            <h2>counter:{count}</h2>
            <h2>counter:{rcount}</h2>
            <button onClick={()=>setCount(count+1 )}>update counter</button>
            <button onClick={()=>rsetCount(rcount-1)}>decrement counter</button>
        </div>
    )
 }
 export default Count;