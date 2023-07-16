import styled, { keyframes } from 'styled-components';
const gradientAnimation = keyframes`
  0% {
    background: linear-gradient(180deg, #4f2ee8 0%, #686868 100%);
  }
  20% {
    background: linear-gradient(180deg, #4f2ee8 0%, #7d7d7d 100%);
  }
  50% {
    background: linear-gradient(180deg, #4f2ee8 0%, #a7a7a7 100%);
  }
  80% {
    background: linear-gradient(180deg, #4f2ee8 0%, #d4d4d4 100%);
  }
  100% {
    background: linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%);
  }
`;
const unGradientAnimation = keyframes`
  0% {
    background: linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%);
  }
  20% {
    background: linear-gradient(180deg, #4f2ee8 0%, #d4d4d4 100%);
  }
  50% {
    background: linear-gradient(180deg, #4f2ee8 0%, #a7a7a7 100%);
  }
  80% {
    background: linear-gradient(180deg, #4f2ee8 0%, #7d7d7d 100%);
  }
  100% {
    background: linear-gradient(180deg, #4f2ee8 0%, #686868 100%);
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;
export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span::before {
    transform: translateX(20px);
  }
  &:checked + span {
    animation: ${unGradientAnimation} 0.2s linear forwards;
  }
`;
export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 34px;
  animation: ${gradientAnimation} 0.2s linear forwards;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  transition: 0.4s;
  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    left: 1px;
    bottom: 1px;
    border-radius: 50px;
    background-color: white;
    transition: 0.4s;
  }
`;
