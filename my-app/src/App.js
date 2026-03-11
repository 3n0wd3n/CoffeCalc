import React, { useState } from "react";
import "./App.css";

import ListeningMode from "./components/ListeningMode";
import ManualMode from "./components/ManualMode";
import PercentageList from "./components/PercentageList";
import PostRoast from "./components/PostRoast";

// root component orchestrates mode switching and displays results
function App() {
  const [mode, setMode] = useState("listen"); // 'listen' or 'manual' or 'density'
  const [results, setResults] = useState([]);
  const navRef = React.useRef(null);
  // underline logic removed since nav is now colored text only

  // clear previous results whenever the user changes mode
  React.useEffect(() => {
    setResults([]);
  }, [mode]);

  // underline logic removed; simply color active text

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Coffee Calc</h1>
      </header>

      <nav className='mode-nav' ref={navRef}>
        <button data-mode='listen' onClick={() => setMode("listen")} className={mode === "listen" ? "active" : ""}>
          Listening Mode
        </button>
        <button data-mode='manual' onClick={() => setMode("manual")} className={mode === "manual" ? "active" : ""}>
          Manual Entry
        </button>
        <button data-mode='density' onClick={() => setMode("density")} className={mode === "density" ? "active" : ""}>
          Post‑roast density
        </button>
      </nav>

      <main>
        {mode === "listen" && <ListeningMode onResults={setResults} />}
        {mode === "manual" && <ManualMode onResults={setResults} />}
        {mode === "density" && <PostRoast />}

        {mode !== "density" && <PercentageList items={results} />}
      </main>
    </div>
  );
}

export default App;
