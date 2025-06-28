import React, { useState } from "react";
import "./App.css";

const pricingData = { /* same 50/55/60 pricing you reviewed earlier */ };

const logos = { /* same logo URLs */ };

function App() {
  const [age, setAge] = useState(60);
  const carriers = pricingData[age] || {};

  return (
    <div className="container">
      <h1>Final Expense Quoter</h1>
      <label>Select Age:</label>
      <select value={age} onChange={(e) => setAge(Number(e.target.value))}>
        {Object.keys(pricingData).map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>
      <table>
        <thead>…same headers…</thead>
        <tbody>
          {Object.entries(carriers).map(([carrier, tiers]) => (
            <tr key={carrier}>
              <td><img src={logos[carrier]} alt={carrier} className="logo" /> {carrier}</td>
              <td>{tiers.Level ? `$${tiers.Level.toFixed(2)}` : "—"}</td>
              <td>{tiers.Graded ? `$${tiers.Graded.toFixed(2)}` : "—"}</td>
              <td>{tiers.Guaranteed ? `$${tiers.Guaranteed.toFixed(2)}` : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
