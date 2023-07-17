import "./App.css";
import APage from "./APage";
import BPage from "./BPage";

function App() {
  const bool = true;

  return (
  <>
  {bool === true
  ? <APage/>
  : <BPage/>
}
</>
  );
};

export default App;