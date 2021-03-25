import { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);

  const getData = () => {
    fetch("name.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        if (myJson.status_code === 200) setNames(myJson.names);
      });
  };

  const handleClick = () => {
    getData();
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Mostrar Nombres</button>

        {names.length > 0 && names.map((name, i) => <div key={i}>{name}</div>)}
      </header>
    </div>
  );
}

export default App;
