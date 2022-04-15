import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";

const Theme = () => {
    const [color,setColor] = useState('red');
    const dispatch = useDispatch();

    return (
        <>
        <input type="text" onChange={(e)=>setColor(e.target.value)} />
        <button onClick={()=>dispatch(changeTextColor(color))}>Change Color</button>
        <h1>{color}</h1>
        </>
    )
}
export default Theme;