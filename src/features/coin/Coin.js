import { useSelector } from "react-redux";

const Coin = () => {
    const count = useSelector((state)=>state.counter.count);
    const color = useSelector((state)=>state.theme.color);

    return (
        <>
        <p style={{color:color}}>coin:</p> {count}
        </>
    )
}
export default Coin;