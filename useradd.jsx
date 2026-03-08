import { useState } from "react";

function Useradd(){
    const[name,setname]=useState('')
    const[age,setage]=useState('')
    const[Email,setemail]=useState('')

    const Createuser=async()=>{
        console.log(name,age,Email);
        const url="http://localhost:3000/users";
        let responce=await fetch(url,{
            method:"Post",
            body:JSON.stringify({name,age,Email})
        });
        responce=await responce.json();

        if(responce){
            alert("responce add succesfull");
        }
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Add user</h1>
            <input type="text" onChange={(event)=>setname(event.target.value)} placeholder="Enter your name" /><br/><br/>
            <input type="Email" onChange={(event)=>setemail(event.target.value)} placeholder="Enter Email" /><br/><br/>
            <input type="number" onChange={(event)=>setage(event.target.value)} placeholder="Enter age "/><br/><br/>
            <button onClick={Createuser}>Add user</button>
        </div>
    )
}
export default Useradd;