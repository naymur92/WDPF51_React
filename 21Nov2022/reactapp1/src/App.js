import { myInfo, x, flowers, grettings } from "./message";

function App() {
  return (
    <div className="App">
      {myInfo}
      <p>{x}</p>
      <p>{flowers}</p>
      <h5>{grettings}</h5>
      <h1>Welcome to my app</h1>
      <table border="1" cellspacing="15" cellpadding="10">
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>Naymur</td>
        </tr>
        <tr>
          <td>Fayzullah</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
