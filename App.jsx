import { useActionState } from "react";

function App() {
  const handlelogin = (prevData, formdata) => {
    let name = formdata.get("name")
    let password = formdata.get("password")
    let regex = /^[A-Z0-9]+$/i;
    if (!name|| name.length > 5) {
      return { error: "name should not contain more than 5 charactor" }
    }
    else if (!regex.test(password)) {
      return { error: "password can catain only numbers and alphabet" }
    }
    else {
      return { messsage: "login succesfully" }
    }
    
  }
  const[data,action,pending]=useActionState(handlelogin,null)
  console.log(data);
  return (

    <div>
      <h1>validation with useaction state hook</h1>
      {
        data?.messsage && <span style={{color:"green"}}>{data?.messsage}</span>

      }
       {
        data?.error && <span style={{color:"red"}}>{data?.error}</span>
        
      }
      <form action={action}>
        <input name="name" type="text" placeholder="Enter name" /><br /><br />
        <input name="password" type="text" placeholder="Enter password" /><br /><br />
        <button disabled={pending}>{pending}login</button>
      </form>
    </div>
  )
}
export default App;