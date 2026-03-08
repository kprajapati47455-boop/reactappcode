
import { useState } from "react"

function Skills() {
    const [skills, setskills] = useState([]);
    const handleskils = (event) => {
        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setskills([...skills, event.target.value])
        }
        else {
            setskills([...skills.filter((item) => item != event.target.value)])
        }
    }
    return (
        <div>
            <h1>handle checkbox in jsx </h1>

            <input onChange={handleskils} value="php" type="checkbox" id="php" />
            <label htmlFor="php">php</label>
            <br />
            <input onChange={handleskils} value="python" type="checkbox" id="python" />
            <label htmlFor="python">python</label>
            <br />


            <input onChange={handleskils} value="js" type="checkbox" id="js" />
            <label htmlFor="js"> js </label>
            <br />



            <input onChange={handleskils} value="node" type="checkbox" id="node" />
            <label htmlFor="node">node</label>
            <br />
            <h2>skills: {skills.join(", ") }</h2>

 


        </div>

    )
}
export default Skills