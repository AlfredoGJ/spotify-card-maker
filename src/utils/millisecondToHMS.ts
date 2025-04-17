const hourValue = 3600000;
const minuteValue = 60000;
const secondValue = 1000;
function millisecondsToHMS(millis: number) {
  let hours = Math.floor(millis / hourValue);
  let rest = millis % hourValue;
  let minutes = Math.floor(rest / minuteValue);
  rest = rest % minuteValue;
  let seconds = Math.floor(rest / secondValue);

  let normalizeNumber = (n: number) => (n > 9 ? n.toString() : `0${n}`);

  return {
    hours,
    minutes,
    seconds,
    hoursToString: normalizeNumber(hours),
    minutesToString: normalizeNumber(minutes),
    secondsToString: normalizeNumber(seconds),
  };
}

export default millisecondsToHMS;
