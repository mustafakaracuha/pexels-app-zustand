import "./App.css";
import ImageDisplay from "./components/imageDisplay/imageDisplay";
import { useStore } from "../src/store/store";

function App() {
  const { darkMode } = useStore();

  return (
    <div className={
      darkMode
        ? "flex w-full h-full flex-col items-center justify-start p-14 transition duration-500 bg-black"
        : "flex w-full flex-col items-center justify-start p-14 transition duration-500 bg-white"
    }>
      <ImageDisplay />
    </div>
  );
}

export default App;
