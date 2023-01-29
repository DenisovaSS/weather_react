import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <div className="open-source">
          <a
            href="https://github.com/DenisovaSS/weather_react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Svitlana Denysova
        </div>
      </footer>
    </div>
  );
}

export default App;
