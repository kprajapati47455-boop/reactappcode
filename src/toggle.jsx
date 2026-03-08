import { useState } from "react"

const useToggle=(defaultvalue)=>{
    const[value,setvalue]=useState(defaultvalue);



function togglevalue(val){
    console.log(val);
    if(typeof val!=='boolean'){
        console.log("if");
        setvalue(!value)
    }
    else{
        console.log("else");
        setvalue(val)
    }
}
    return [value,togglevalue];

}
export default useToggle;