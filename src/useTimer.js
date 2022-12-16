import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0); //"Your code here";

  const isStart = useRef(0);//"Your code here";
  const active = useRef(); //"Your code here"
  const refInterval = useRef(); //"Your code here"; 
  const [splitTimes, setSplitTimes] = useState([]);


  const splitTimer = () => {
    // insert current time to splitTimes
    setSplitTimes([...splitTimes,time]);
    
  }

  const startTimer = () => {
    isStart.current = 1;//"Your code here";
    // dua viec setInterval
    
    refInterval.current = setInterval(() => {
      isStart.current === 1 && setTime((time) => time + 1)   
    }
    , 1000) ;
    
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);//"Your code here";
    active.current.disabled = false;
    isStart.current = 0;
  };
  const resetTimer = () => {
    setTime(0);//"Your code here";
    active.current.disabled = false;
    setSplitTimes([]);
  };

  return { time, startTimer, stopTimer, resetTimer, splitTimes, splitTimer, active };
};
export default useTimer;