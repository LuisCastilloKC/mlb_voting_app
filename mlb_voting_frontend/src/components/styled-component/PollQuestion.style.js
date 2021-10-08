import React from "react";
import styled from "styled-components";


export const QuestionDiv = styled.div`
  text-align: center;
`

export const PollQuestion = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: ${props => (props.main ? "black" : "white")};
  text-align: center;
`;
