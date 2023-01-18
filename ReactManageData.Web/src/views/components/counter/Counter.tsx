import { Badge, Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Header from "core/Header";
import {incrementOne , decrementOne , reset, counterValue} from "./counterSlice"

function Counter() {
    const dispatch = useDispatch();
    const countValue = useSelector(counterValue);

    return ( 
        <div>
          <Header title='Counter' content="counter" />
            <Button  type="primary" danger onClick={() => dispatch(decrementOne())}>➖</Button>
            <Badge count={countValue} style={{ backgroundColor: '#52c41a' }}/>
            <Button  type="primary" onClick={() => dispatch(incrementOne())}>➕</Button>
            <Button  danger className="m-2" onClick={() => dispatch(reset())}>reset counter</Button>
        </div>
     );
}
 
export default Counter;