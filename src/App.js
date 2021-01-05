import DisplayDate from "./components/DisplayDate";
import AddFood from "./components/AddFood";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Potluck Planner</h1>
        <DisplayDate />
        <AddFood />
      </header>
    </div>
  );
}

export default App;
