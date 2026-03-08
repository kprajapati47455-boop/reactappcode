import { Link, useParams } from "react-router"

export default function Userdetail(){
    const paramsData=useParams();
    console.log(paramsData);
    return(
        <div style={{marginLeft:"20px"}}>
        <h2>user detail page</h2>
        <h2>user id:{paramsData.id}</h2>
        <h3><Link to={"/users"}>Back</Link></h3>
        </div>
    )
}