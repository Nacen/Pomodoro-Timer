import React from "react";
import styled from "styled-components";
import Label from "../../StyledComponents/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../StyledComponents/Button";

const H3 = styled.h3`
  font-size: 2.2rem;
  align-self: center;
  margin: 15px 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Settings = styled(SettingsContainer)`
  justify-content: space-evenly;
  margin-top: 1rem;
  align-items: center;
`;

const Length = styled.span`
  font-size: 2.4rem;
`;

const TimerSettings = ({
  sessionLength,
  breakLength,
  setSessionLength,
  setBreakLength,
  isRunning
}) => {
  

  return (
    <Div>
      <H3>Timer Settings</H3>
      <SettingsContainer>
        <Div>
          <Label id="session-label" htmlFor="session-length">
            Session Length
          </Label>
          <Settings>
            <Button
              id="session-increment"
              onClick={() => {
                if (sessionLength === 60 || isRunning) return;
                setSessionLength(prevLength => prevLength + 1);
              }}
            >
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </Button>
            <Length id="session-length">{sessionLength}</Length>
            <Button
              id="session-decrement"
              onClick={() => {
                if (sessionLength === 1 || isRunning) return;
                setSessionLength(prevLength => prevLength - 1);
              }}
            >
              <FontAwesomeIcon icon={faMinus} size="2x" />
            </Button>
          </Settings>
        </Div>
        <Div>
          <Label id="break-label" htmlFor="break-length">
            Break Length
          </Label>
          <Settings>
            <Button
              id="break-increment"
              onClick={() => {
                if (breakLength === 60 || isRunning) return;
                setBreakLength(prevLength => prevLength + 1);
              }}
            >
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </Button>
            <Length id="break-length">{breakLength}</Length>
            <Button
              id="break-decrement"
              onClick={() => {
                if (breakLength === 1 || isRunning) return;
                setBreakLength(prevLength => prevLength - 1);
              }}
            >
              <FontAwesomeIcon icon={faMinus} size="2x" />
            </Button>
          </Settings>
        </Div>
      </SettingsContainer>
    </Div>
  );
};

export default TimerSettings;
