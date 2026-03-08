import { useContext } from "react"
import subjectContext from "./contextdata"

export default function Subjectcomponent() {
    const subject =useContext(subjectContext)
  return(
    <div style={{backgroundColor:"seagreen",padding:"10px"}}>
      <h1>subject is:{subject}</h1>
      
       
    </div>
  

  )
   
   

   
}