import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../../StyledComponents/Button";
import moment from 'moment';

const Div = styled.div`
  margin: 10px 10%;
  display: flex;
  height: 10vh;
  justify-content: space-evenly;
`;

const StartStopButton = styled(Button)`
  position: relative;
`;

const PlayButton = styled(FontAwesomeIcon)`
  position: absolute;
  left: -50%;
  color: #27ae60;
`;
const StopButton = styled(FontAwesomeIcon)`
  color: #e74c3c;
`;

const ResetButton = styled(FontAwesomeIcon)`
  color: #ecf0f1;
`;

const TimerControls = ({
  setSessionLength,
  setBreakLength,
  setTimerState,
  setIsRunning,
  timerAlert,
  setTimeLeft,
  sessionLength
}) => (
  <Div>
    <StartStopButton
      id="start_stop"
      onClick={() => setIsRunning(running => !running)}
    >
      <PlayButton icon={faPlay} size="4x" />
      <StopButton icon={faStop} size="4x" />
    </StartStopButton>
    <Button
      id="reset"
      onClick={() => {
        setIsRunning(false);
        setSessionLength(25);
        setBreakLength(5);
        setTimerState("Session");
        setTimeLeft(moment.duration(sessionLength, "minutes"));
        timerAlert.current.pause();
        timerAlert.current.currentTime = 0;
        timerAlert.current.pause();
      }}
    >
      <ResetButton icon={faUndoAlt} size="4x" />
    </Button>
  </Div>
);

export default TimerControls;
