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
        <footer className="text-center">
          Coded by Matea Zerjav and is
          <a href="https://github.com/MateaZerjav/react-dictionary-project">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
