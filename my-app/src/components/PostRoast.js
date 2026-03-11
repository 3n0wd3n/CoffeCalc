import React, { useState } from "react";

/**
 * Simple calculator for post-roast weight loss.
 * Users enter green and roasted weights in grams; the component shows the
 * absolute loss and the percentage lost relative to the original green weight.
 */
function PostRoast() {
  const [green, setGreen] = useState("");
  const [roasted, setRoasted] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const g = parseFloat(green);
    const r = parseFloat(roasted);
    if (isNaN(g) || isNaN(r) || g <= 0 || r < 0) {
      alert("Please enter valid numeric weights");
      return;
    }
    const lost = g - r;
    const pct = (lost / g) * 100;
    setResult({ grams: lost, percent: pct });
  };

  return (
    <div className='post-roast'>
      <h3>Post‑roast density</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Green beans (g):
          <input type='number' min='0' step='any' value={green} onChange={(e) => setGreen(e.target.value)} />
        </label>
        <label>
          Roasted beans (g):
          <input type='number' min='0' step='any' value={roasted} onChange={(e) => setRoasted(e.target.value)} />
        </label>
        <button type='submit'>Calculate</button>
      </form>
      {result && (
        <div className='loss-results'>
          <p>
            Weight lost: {result.grams.toFixed(1)} g ({result.percent.toFixed(1)}%)
          </p>
        </div>
      )}
    </div>
  );
}

export default PostRoast;
