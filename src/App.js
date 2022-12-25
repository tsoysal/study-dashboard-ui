import "./styles.css";
import Introduce from "./Introduce";
import StatusCard from "./statuscard";
import NavMenu from "./navmenu";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-quote">
        “Success is the sum of small efforts, repeated day in and day out.”
      </h1>
      <Introduce name="Elif" />
      <div id="cards-container">
        <StatusCard title="Soru" value="100" color="#E8995E" />
        <StatusCard title="Paragraf" value="100" color="#6ECADF" />
        <StatusCard title="Problem" value="100" color="#A1F2AC" />
      </div>
      <NavMenu />
    </div>
  );
}
