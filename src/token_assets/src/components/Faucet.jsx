import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {

  const[isHidden, setHidden] = useState(false);
  const[buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setHidden(true);
    const result = await token.payOut();
    setText(result);
    // setHidden(false);

  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Dhoyon tokens here! Claim 10,000 DHOYON coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isHidden}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
