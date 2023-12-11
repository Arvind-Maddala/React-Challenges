import "./App.css";
import { useState } from "react";
function BillComponent({ bill, handleBill }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <p>How much was the bill</p>
      <input placeholder="Bill value" value={bill} onChange={handleBill} />
    </div>
  );
}

function TipSuggestor({ children, tip, handleTip }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <p>{children}</p>
      <select value={tip} onChange={handleTip}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absoultely amazing (20%)</option>
      </select>
    </div>
  );
}
function App() {
  const [bill, setBill] = useState("");
  const handleBill = (e) => {
    setBill(Number(e.target.value));
    console.log(bill);
  };
  const [tip, setTip] = useState("");
  const handleTip = (e) => {
    setTip(e.target.value);
  };
  const [friendTip, setFriendTip] = useState("");
  const handleFriendTip = (e) => {
    setFriendTip(e.target.value);
  };
  return (
    <div>
      <BillComponent bill={bill} handleBill={handleBill} />
      <TipSuggestor tip={tip} handleTip={handleTip}>
        How did you like the service
      </TipSuggestor>
      <TipSuggestor tip={friendTip} handleFriendTip={handleFriendTip}>
        How did your friend like the service
      </TipSuggestor>
      {bill && (
        <div>
          {" "}
          You pay ${bill}( ${bill} + $ tip)
        </div>
      )}
      {tip}
    </div>
  );
}

export default App;
