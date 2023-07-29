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
  margin-left: 40%;
  margin-top: 216px;
  margin-bottom: 200px;
  animation: ${spin} 0.85s linear infinite;
  @media (max-width: 425px) {
    margin-left: 44%;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-left: 46%;
  }
`;
export const SpinnerCategories = styled(ImSpinner8)`
  display: flex;
  animation: ${spin} 0.85s linear infinite;
  margin-bottom: 302px;
  margin-top: 216px;
  margin-left: 160px;
  @media (max-width: 425px) {
    margin-top: 203px;
    margin-bottom: 203px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-left: 130px;
    margin-right: auto;
  }
`;
SpinnerCategories.defaultProps = {
  size: 40,
};
Spinner.defaultProps = {
  size: 40,
};
