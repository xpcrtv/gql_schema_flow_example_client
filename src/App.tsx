import "./App.css";
import { useGetUsers } from "./App.generated";

function App() {
  const { data } = useGetUsers();

  return (
    <div className="App">
      <div className="list">
        {data?.users.map(({ id, name, age }) => (
          <li key={id}>
            {name} / {age}
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
