 
import'./header.css'
import { Link, NavLink } from "react-router"



export default function NavBar() {
    return (
        <div className="header">
            <div>
                <NavLink className="link" to="/"><h2>Logo</h2></NavLink>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink className={({isActive})=>isActive?'costom-active':'link'} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/About">About</NavLink>
                    </li>
                    <li><NavLink className="link" to="/login">Login</NavLink></li>
                     <li><NavLink className="link" to="/collegedrop">College</NavLink></li>
                     <li><NavLink className="link" to="/users">Users</NavLink></li>

                </ul>

            </div>


        </div>
    )
}