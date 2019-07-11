import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align:center;
  margin: 10px;
`

const H1 = styled.h1`
  font-size: 3.6rem;
`

const Header = () => (
  <StyledHeader>
    <H1>Pomodoro Timer</H1>
  </StyledHeader>
)

export default Header;