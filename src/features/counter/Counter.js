import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,incrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    return (
        <>
        <button onClick={()=>dispatch(increment())}>Increase</button>
        count: {count}
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        <button onClick={()=>dispatch(incrementByAmount(7))}>Increase by 7</button>
        </>
    )
}
export default Counter;