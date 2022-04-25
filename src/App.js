import Chart from "./components/Chart";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import "./assets/css/style.css";
import Operation from "./components/Operation";

function App() {
  return (
    <>
      <NavBar />
      <DashBoard />
      <Operation />
      {/*  <Chart /> */}
    </>
  );
}

export default App;
