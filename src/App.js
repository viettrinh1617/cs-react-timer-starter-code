import { formatTime } from "./formatTime"; //"Your code here";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active, splitTimer, splitTimes = [] } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>

        {/* render splitTimes */}
        {splitTimes.map((splitTime) => (
          <div className="splitDisplay" key={splitTime}>
            {/* render time */}
            {formatTime(splitTime)}
            </div>
        ))}

        <div className="button__wrapper">
          <button className="button" onClick={splitTimer}>
            Split
          </button>
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active} //your code here
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
