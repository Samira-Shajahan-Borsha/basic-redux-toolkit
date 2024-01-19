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
    <section className="w-screen flex justify-center mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center">Counter App</h1>
        <div className="flex gap-x-4 items-center mt-5">
          <button
            className="border-2 border-green-700 px-4 py-2 rounded-md"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="border-2 border-green-700 px-4 py-2 rounded-md"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment By Value
          </button>
          <p>{count}</p>
          <button
            className="border-2 border-red-700 px-4 py-2 rounded-md"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
