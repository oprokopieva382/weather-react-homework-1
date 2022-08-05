import "./App.css";

import HeaderDate from "./HeaderDate";
import HeaderForm from "./HeaderForm";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <HeaderForm />
          <HeaderDate />
          <Temperature />
        </div>
        <a
          href="https://github.com/oprokopieva382/1st-Challenge"
          class="source"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Ksy Fate
      </div>
    </div>
  );
}

export default App;
