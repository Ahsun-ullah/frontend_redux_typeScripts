import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <button className="gap-2 p-4" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button
          className="gap-2 p-4"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          IncrementByAmount
        </button>
        <span>{count}</span>
        <button className="gap-2 p-4" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
