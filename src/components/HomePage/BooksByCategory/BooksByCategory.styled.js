import styled from 'styled-components';
export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 52px; /* 108.333% */
  letter-spacing: -1.92px;
  margin-bottom: 40px;
  color: ${props => props.theme.titleColor};
  @media (max-width: 425px) {
    font-size: 32px;
    width: 100%;
    width: 335px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const PurpleParticle = styled.span`
  color: ${props => props.theme.purpleColor};
`;
export const Container = styled.div`
  width: 998px;
  margin-left: auto;
  margin-bottom: 100px;
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImagesContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 265px;
  margin-bottom: 14px;
  border-radius: 8px;
  cursor: pointer;
  &:hover p {
    transform: translate(0);
    pointer-events: all;
  }
  @media (max-width: 425px) {
    width: 335px;
    height: 485px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 218px;
    height: 316px;
  }
`;
export const QuickView = styled.p`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 26px 0px;
  background-color: ${props => props.theme.yellowColor};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  text-transform: uppercase;
  transform: translateY(100%);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  @media (max-width: 425px) {
    padding: 50px 0px;
    font-size: 20px;
  }
`;
export const BooksContainer = styled.ul`
  display: grid;
  grid-gap: 40px 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  @media (max-width: 425px) {
    display: block;
  }
  @media (max-width: 425px) {
    width: 335px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    grid-gap: 40px 24px;
    grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
  }
`;
export const BooksColections = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;
export const Book = styled.li`
  &:not(:last-of-type) {
    @media (max-width: 425px) {
      margin-bottom: 40px;
    }
  }
`;
export const ColectionsTitle = styled.p`
  margin-bottom: 18px;
  color: #b4afaf;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.42px;
  text-transform: uppercase;
`;
export const TitleBook = styled.p`
  margin-bottom: 4px;
  color: ${props => props.theme.titleColor};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.64px;
  max-width: 180px;
  text-transform: uppercase;
`;
export const AuthorBook = styled.p`
  color: #b4afaf;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
  letter-spacing: -0.48px;
  max-width: 180px;
`;
export const Button = styled.button`
  display: flex;
  padding: 14px 28px;
  align-items: flex-start;
  gap: 10px;
  margin-left: auto;
  border-radius: 40px;
  border: 2px solid #4f2ee8;
`;
