import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./feather/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <div>{count}</div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          incrementByAmount
        </button>
      </div>
    </div>
  );
}

export default App;
