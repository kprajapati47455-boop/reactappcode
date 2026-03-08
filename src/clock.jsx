import { useEffect, useState } from "react"

const Clock= ({color}) => {
    const[time,settime]=useState();
    useEffect(()=>{
        setInterval(()=>{
            settime(new Date().toLocaleTimeString());

        },1000);

    }, [])

    return(
        <div>
          < h2 style={{color:color,backgroundColor:"black",width:"120px",padding:"5px"}}>{time}</h2>   
        </div>
    )
}
export default Clock