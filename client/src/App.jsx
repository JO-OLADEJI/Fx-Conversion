import React from 'react';
import styles from './App.module.css';
import Chart from "./components/Chart.jsx";


const App = () => {
  return (
    <div className={styles['App']}>
      <h1>Fx Rates</h1>
      <p>Your Truffle Box is installed and ready.</p>
      <h2>Smart Contract Example</h2>
      <p>
        If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).
      </p>
      <p>
        Try changing the value stored on <strong>line 42</strong> of App.js.
      </p>
      <Chart />
    </div>
  );
}

export default App;
