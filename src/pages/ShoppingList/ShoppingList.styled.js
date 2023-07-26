import styled from 'styled-components';
export const Container = styled.div`
  padding: 0px 24px;
  display: flex;
  @media (max-width: 767px) {
    margin-top: 100px;
    padding: 0px 20px;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 0px 32px;
    justify-content: center;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DisplayNone = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
`;
