import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

import timerSound from "../../audio/alarm.mp3";
import TimerDisplay from "./TimerDisplay/TimerDisplay";
import TimerControls from "./TimerControls/TimerControls";
import TimerSettings from "./TimerSettings/TimerSettings";
import timerStates from "./TimerStates/TimerStates";
import useInterval from "../useInterval/useInterval";

const Timer = () => {
  const [timerState, setTimerState] = useState(timerStates.session);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    moment.duration(sessionLength, "minutes")
  );

  const timerAlert = useRef(null);

  useInterval(
    () => {
      if (
        timeLeft.get("hours") === 0 &&
        timeLeft.get("minutes") === 0 &&
        timeLeft.get("seconds") === 0
      ) {
        completeTimer();
        return;
      }
      const newTime = moment.duration(timeLeft);
      newTime.subtract(1, "second");
      setTimeLeft(newTime);
    },
    isRunning ? 1000 : null
  );

  const completeTimer = () => {
    timerAlert.current.play();
    if (timerState === timerStates.session) setTimerState(timerStates.break);
    else setTimerState(timerStates.session);
  };

  useEffect(() => {
    if (timerState === "Session") {
      setTimeLeft(moment.duration(sessionLength, "minutes"));
    } else if (timerState === "Break") {
      setTimeLeft(moment.duration(breakLength, "minutes"));
    }
  }, [sessionLength, timerState, breakLength]);

  const leftPad = val => {
    if (val < 10) return `0${val}`;
    return `${val}`;
  };

  useEffect(() => {
    if (isRunning) {
      document.title = `Pomodoro ${timeLeft.get("minutes")}:${leftPad(
        timeLeft.get("seconds")
      )}`;
    }
  }, [timeLeft, isRunning]);

  return (
    <div>
      <TimerDisplay timerState={timerState} timeLeft={timeLeft} />
      <TimerControls
        setIsRunning={setIsRunning}
        isRunning={isRunning}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        setTimerState={setTimerState}
      />
      <TimerSettings
        timerState={timerState}
        setTimeLeft={setTimeLeft}
        isRunning={isRunning}
        sessionLength={sessionLength}
        breakLength={breakLength}
        setSessionLength={setSessionLength}
        setBreakLength={setBreakLength}
      />
      <audio id="beep" ref={timerAlert} src={timerSound} />
    </div>
  );
};

export default Timer;
