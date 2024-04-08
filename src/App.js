import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Matea Zerjav</footer>
      </div>
    </div>
  );
}

export default App;
