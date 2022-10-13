import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnColor, setBtnColor] = useState("red");
  const newBtnColor = btnColor === "red" ? "blue" : "red";
  return (
    <div className="App">
      <main className="container">
        <button
          className="color-button"
          disabled={btnDisabled}
          onClick={() => setBtnColor(newBtnColor)}
          style={{ backgroundColor: btnDisabled ? "gray" : btnColor }}
        >
          Change to {newBtnColor}
        </button>
        <input type="checkbox" onClick={() => setBtnDisabled(!btnDisabled)} />
      </main>
    </div>
  );
}

export default App;
