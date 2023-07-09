import { decrement, increment } from "./Redux/Features/Counter/CounterSlice";
import { RootState } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="h-[700px] flex justify-center items-center">
        <button
          onClick={() => dispatch(increment())}
          className=" bg-green-500 p-4 rounded-xl mx-10"
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className=" bg-red-500 p-4 rounded-xl mx-10"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
