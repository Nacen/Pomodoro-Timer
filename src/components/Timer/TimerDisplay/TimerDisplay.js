import React from "react";
import styled from "styled-components";
import Tomato from "../../../images/tomato.svg";

const Section = styled.section`
  background-image: url(${Tomato});
  background-repeat: no-repeat;
  height: 50vh;
  margin-top: 20px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TimerLabel = styled.label`
  font-size: 2.8rem;
  align-self: center;
  margin-top: 12rem;
  text-transform: uppercase;
`;

const TimeLeft = styled.div`
  font-size: 5rem;
  text-align: center;
  align-self: center;
`;

const leftPad = val => {
  if (val < 10) return `0${val}`;
  return `${val}`;
};

const TimerDisplay = ({ timerState, timeLeft }) => {
  return (
    <Section>
      <TimerLabel id="timer-label">{timerState} </TimerLabel>
      <TimeLeft id="time-left">
        {timeLeft.get("hour") === 1
          ? "60:00"
          : `${leftPad(timeLeft.get("minutes"))}:${leftPad(
              timeLeft.get("seconds")
            )}`}
      </TimeLeft>
    </Section>
  );
};

export default TimerDisplay;
