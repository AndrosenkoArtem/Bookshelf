import styled from 'styled-components';
import { ReactComponent as Close } from 'images/close.svg';
export const Background = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: all;
  background-color: #000000c7;
  position: fixed;
  top: 0;
  left: 0;
`;
export const Container = styled.div`
  pointer-events: all;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 80px 40px 40px;
  border-radius: 18px;
  border: 2px solid #111;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.backgroundColor};
`;
export const CloseIconCase = styled.button`
  display: contents;
`;
export const CloseIcon = styled(Close)`
  position: absolute;
  top: 31px;
  right: 31px;
  * {
    stroke: ${props => props.theme.titleColor};
  }
  &:hover * {
    stroke: ${props => props.theme.purpleColor};
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.96px;
  margin-bottom: 8px;
  color: ${props => props.theme.titleColor};
`;
export const Subtitle = styled.p`
  color: #b4afaf;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  margin-bottom: 20px;
`;
export const Description = styled.p`
  max-width: 279px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  color: ${props => props.theme.titleColor};
`;
export const ImagesTitle = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
export const Img = styled.img`
  width: 192px;
  height: 281px;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: -1px 15px 30px -12px black;
  }
`;
export const DescriptionContainer = styled.div`
  margin-left: 24px;
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
export const Button = styled.button`
  background-color: #0000;
  padding: 20px 0px;
  width: 499px;
  align-items: center;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.purpleColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.18px;
  text-transform: uppercase;
  color: ${props => props.theme.titleColor};
  &:hover {
    color: ${props => props.theme.backgroundHeader};
    background-color: ${props => props.theme.purpleColor};
  }
`;
export const Сongratulations = styled.p`
  color: ${props => props.theme.blackGrayColor};
  margin: auto;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
  letter-spacing: -0.48px;
  width: 324px;
`;
