import "./App.css";
import { useGetHello } from "./App.generated";

function App() {
  const { data } = useGetHello();

  return <div className="App">{data?.hello}</div>;
}

export default App;
