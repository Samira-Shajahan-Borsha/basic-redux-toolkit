import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <section className="w-screen flex justify-center mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center">Counter App</h1>
        <div className="flex gap-x-4 items-center mt-5">
          <button className="border-2 border-green-700 px-4 py-2 rounded-md">
            Increment
          </button>
          <p>{count}</p>
          <button className="border-2 border-red-700 px-4 py-2 rounded-md">
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
