import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-top: 4px solid #8C8C8C;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
