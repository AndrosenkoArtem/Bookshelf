import styled from 'styled-components';
export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 52px; /* 108.333% */
  letter-spacing: -1.92px;
  margin-bottom: 40px;
`;
export const PurpleParticle = styled.span`
  color: ${props => props.theme.purpleColor};
`;
export const Container = styled.div``;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(0.95);
  }
`;
export const ImagesContainer = styled.div`
  overflow: hidden;
  width: 180px;
  height: 265px;
  margin-bottom: 14px;
  border-radius: 8px;
`;
export const BooksContainer = styled.ul`
  display: flex;
`;
export const BooksColections = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;
export const Book = styled.li`
  &:not(:last-of-type) {
    margin-right: 24px;
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
  color: ${props => props.theme.blackColor};
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
  margin-bottom: 32px;
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
