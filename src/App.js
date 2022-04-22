import Chart from "./components/Chart";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DashBoard />
      <Chart />
    </div>
  );
}

export default App;
