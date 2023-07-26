import styled from 'styled-components';
export const Container = styled.div`
  padding: 0px 24px;
  display: flex;
  @media (max-width: 425px) {
    display: block;
    padding: 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: column;
    padding: 0px 32px;
  }
`;
export const CategoriesSupport = styled.div`
  @media (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    margin-bottom: 100px;
  }
`;
