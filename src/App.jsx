import AntPorvider from "./contexts/AntContext";
import Paths from "./routes/Paths";

function App() {
  return (
    <>
      <div className="bg-gray-500/10">
        <AntPorvider>
          <Paths />
        </AntPorvider>
      </div>
    </>
  );
}

export default App;
