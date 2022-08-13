import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">Other pages</div>
      </div>
    </div>
  );
}

export default App;
