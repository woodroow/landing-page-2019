import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  text: string
};

const animate = keyframes`
  0% 
  {
    background-position: -500%;
  }
  100%
  {
    background-position: 500%;
  }
`;

const Text = styled.p`
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${animate} 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default ({ text }: Props) => (
  <Text>
    {text}
  </Text>
);
