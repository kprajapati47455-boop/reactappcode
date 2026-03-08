import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function Useredit() {
    const { id } = useParams();
    console.log(id);
    const navigate=useNavigate();

    useEffect(() => {
        getuserdata();
    }, [])
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [Email, setemail] = useState('')
    const url = "http://localhost:3000/users/" + id;

    const getuserdata = async () => {
        
        let responce = await fetch(url)
        responce = await responce.json();

        setname(responce.name)
        setage(responce.age)
        setemail(responce.Email)
        

    }
    const Updateuser=async()=>{
        console.log(name,age,Email);
        let responce=await fetch(url,{
            method:'put',
            body:JSON.stringify({name,age,Email})

        });
        responce=await responce.json();
        console.log(responce)
        if(responce){
            alert("user data updated")
            navigate('/')
        }
    }



    return (
        <div style={{ textAlign: "center" }}>
            <h1>Edit user detail</h1>
            
                <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter name " /><br /><br />
                <input type="Email" value={Email} onChange={(event)=>setemail(event.target.value)} placeholder="Enter Email " /><br /><br />
                <input type="age" value={age} onChange={(event)=>setage(event.target.value)} placeholder="Enter age " /><br /><br />
                <button onClick={Updateuser}>Udate user</button>

             


        </div>
    )
}
export default Useredit;