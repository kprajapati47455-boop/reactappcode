import { Link } from "react-router"

export default function Usrelist(){
    const userdata=[
        {id:1,name:"anil"},
        {id:2,name:"sajan"},
       {id:3,name:"siddhu"},
        {id:4,name:"tomsayar"},
        {id:5,name:"ansul"}

    ]
      
    
      return(
      <div>
        <h1>user list page</h1>
        {
            userdata.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                </div>
      ))
        }
      </div>
        )
}