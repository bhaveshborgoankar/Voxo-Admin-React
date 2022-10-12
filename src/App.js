import ToggleProvider from "./Helper/ToggleContext/ToggleProvider";
import Routers from "./Routes";

function App() {
  return (
    <ToggleProvider>
      <Routers />
    </ToggleProvider>

  );
}

export default App;
