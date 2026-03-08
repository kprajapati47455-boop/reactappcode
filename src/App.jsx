import { useState } from "react"

export default function App() {

  const colors = JSON.parse(localStorage.getItem('color'))
  const [r, setr] = useState(colors && colors.r ? colors.r : 0)
  const [g, setg] = useState(colors && colors.g ? colors.g : 0)
  const [b, setb] = useState(colors && colors.b ? colors.b : 0)


  const save = () => {
    console.log("saved");

    localStorage.setItem("color", JSON.stringify({ r, g, b }))
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Color mixer</h1>
      <div style={{ height: "100px", width: "150px", margin:"auto", backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')' }}></div>
<br /><br />

      <label htmlFor="">Red </label>
      <input type="range" min={0} max={255} value={r} onChange={(event) => setr(event.target.value)} />
      <br /><br />

      <label htmlFor="">Green </label>
      <input type="range" min={0} max={255} value={g} onChange={(event) => setg(event.target.value)} />
      <br /><br />

      <label htmlFor="">Blue </label>
      <input type="range" min={0} max={255} value={b} onChange={(event) => setb(event.target.value)} />
      <br /><br />
      <button onClick={save}>save color combination</button>

    </div>
  )
}