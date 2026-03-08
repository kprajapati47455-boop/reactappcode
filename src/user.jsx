 
 import { useEffect, useState } from "react"
 import {useNavigate } from "react-router"
 
 export default function Userlist() {
   const[usersdata,setusersdata]=useState([])
   const navigate=useNavigate();
  const url = "http://localhost:3000/users"
   useEffect(() => {
     getuserdata();
   }, [])
     const getuserdata=async()=> {
    
     let responce = await fetch(url);
     responce = await responce.json()
       console.log(responce);
     setusersdata(responce)
    
   }
   const deleteuser =async(id)=>{
    console.log(id);
    let responce=await fetch(url+"/"+id,{
    method:"delete"
    })
  
    responce=await responce.json()
    if(responce){
        alert("record deleted");
    }
      
   }
   const Edituser=(id)=>{

    navigate("/edit/"+id)

   }
   console.log(usersdata);
   return (
     <div>
       
       <ul className="user-list ">
         <li>name</li>
         <li>Email</li>
         
         <li>age</li>
         <li>Action</li>
         <li>Update</li>
       </ul>
       {
         usersdata.map((user)=>(
            <ul className="user-list">
            <li>{user.name}</li>
             
            <li>{user.Email}</li>
           
            <li>{user.age}</li>
            <li><button onClick={()=>deleteuser(user.id)}>delete</button></li>
            <li><button onClick={()=>Edituser(user.id)}>Edit</button></li>
            </ul>
         ))
       }
     </div>
 
   )
 }