import { myEducation } from "./module2";
import { myInfo } from "./myModule";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      {myInfo}
      {myEducation}
    </div>
  );
}

export default App;
