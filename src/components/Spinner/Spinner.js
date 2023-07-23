import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ImSpinner8 } from 'react-icons/im';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(1turn);
}
`;

export const Spinner = styled(ImSpinner8)`
  display: flex;
  margin-left: 450px;
  margin-top: 200px;
  animation: ${spin} 0.85s linear infinite;
`;

Spinner.defaultProps = {
  size: 40,
};
