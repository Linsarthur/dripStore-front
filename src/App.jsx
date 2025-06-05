import { QueryClientProvider } from "@tanstack/react-query";
import AntPorvider from "./contexts/AntContext";
import Paths from "./routes/Paths";
import { queryClient } from "./services";

function App() {
  return (
    <>
      <div className="bg-gray-500/10">
        <QueryClientProvider client={queryClient}>
          <AntPorvider>
            <Paths />
          </AntPorvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
