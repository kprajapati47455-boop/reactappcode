import { useEffect } from "react"

const Counter = ({ counter, data }) => {
    useEffect(() => {
        console.log("maunted fase only ");
    }, [])

    useEffect(() => {
        console.log("update fase only");
    }, [counter])

    return (
        <div>
            <h2>count:{counter}</h2>
            <h2>data:{data}</h2>
        </div>
    )

}
export default Counter;