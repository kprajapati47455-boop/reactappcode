import { NavLink, Outlet } from "react-router";

export default function CollegeDetail(){
    return(
        <div className="college" style={{textAlign:"center"}}>
            <h2>college page</h2>
            <NavLink className="link" to="studentdetail">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <Outlet/>

        </div>
    )
}