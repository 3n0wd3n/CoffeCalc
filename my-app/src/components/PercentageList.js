import React from "react";

/**
 * Props:
 *   items: Array<{percent:number, time:string, combinedTime:string}>
 */
function PercentageList({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className='percentage-list'>
      <h2>Development Times</h2>
      <ul>
        {items.map((i) => (
          <li key={i.percent}>
            {i.percent}% &rarr; {i.time} <em>(total {i.combinedTime})</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PercentageList;
