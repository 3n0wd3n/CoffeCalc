// utility helpers for converting time and calculating development ratios

export function secondsToTimeString(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Given a roast time in seconds, return an array of objects representing
 * 20% through 25% of that duration.  Each object contains the percentage and
 * a formatted mm:ss string.
 */
export function calculateDevelopmentTimes(totalSeconds) {
  const list = [];
  for (let pct = 20; pct <= 25; pct++) {
    const devSeconds = (totalSeconds * pct) / 100;
    const combined = totalSeconds + devSeconds;
    list.push({
      percent: pct,
      time: secondsToTimeString(devSeconds),
      combinedTime: secondsToTimeString(combined),
    });
  }
  return list;
}
