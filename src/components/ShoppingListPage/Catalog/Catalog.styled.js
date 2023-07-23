import styled from 'styled-components';
import { ReactComponent as Trash } from 'images/trash.svg';

export const Container = styled.div`
  margin-left: 40px;
  margin-bottom: auto;
`;
export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 52px; /* 108.333% */
  letter-spacing: -1.92px;
  margin-bottom: 40px;
  color: ${props => props.theme.titleColor};
`;
export const PurpleParticle = styled.span`
  color: #4f2ee8;
`;
export const Img = styled.img`
  width: 116px;
  height: 165px;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: -1px 15px 30px -12px black;
  }
`;
export const Li = styled.li`
  position: relative;
  width: 996px;
  padding: 24px;
  border: 1px solid ${props => props.theme.purpleColor};
  background-color: ${props => props.theme.blackColor};
  border-radius: 16px;
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
export const ByList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  width: 173px;
`;
export const ByItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;
export const BuyLink = styled.a``;
export const ByImg = styled.img`
  cursor: pointer;
  mix-blend-mode: luminosity;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.15));
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.96px;
  margin-bottom: 4px;
  color: ${props => props.theme.titleColor};
`;
export const Subtitle = styled.p`
  color: #b4afaf;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  margin-bottom: 14px;
`;
export const Description = styled.p`
  max-width: 279px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  margin-bottom: auto;
  color: ${props => props.theme.titleColor};
`;
export const Author = styled.p`
  color: #b4afaf;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
`;
export const DescriptionContainer = styled.div`
  width: 808px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;
export const TrashICon = styled(Trash)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  border: 0px solid black;
  &:hover {
    border: 5px solid #d5b8ffb3;
  }
`;
export const EmptyContainer = styled.div`
  margin-left: 315px;
  margin-top: 100px;
`;
export const Empty = styled.p`
  width: 349px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
`;
export const EmptyImg = styled.img`
  width: 332px;
  height: 241px;
  margin: auto;
`;
