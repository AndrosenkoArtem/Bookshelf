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
  body {
    background-color: red;
  }
  @media (max-width: 768px) {
    width: 335px;
    padding: 40px 24px;
    max-height: 95%;
    overflow: scroll;
  }
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
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.96px;
  margin-bottom: 8px;
  color: ${props => props.theme.titleColor};
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px; /* 112.5% */
    letter-spacing: -0.64px;
    margin-bottom: 4px;
  }
`;
export const Subtitle = styled.p`
  color: #b4afaf;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`;
export const Description = styled.p`
  max-width: 279px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
  color: ${props => props.theme.titleColor};
  @media (max-width: 768px) {
    margin-bottom: 14px;
  }
`;
export const ImagesTitle = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Img = styled.img`
  width: 192px;
  height: 281px;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: -1px 15px 30px -12px black;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 408px;
    margin-bottom: 14px;
  }
`;
export const DescriptionContainer = styled.div`
  margin-left: 24px;
  @media (max-width: 768px) {
    margin-left: 0px;
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
    color: ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.purpleColor};
  }
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 14px 23px;
    width: auto;
    font-size: 14px;
    line-height: 18px; /* 128.571% */
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
  @media (max-width: 768px) {
    width: 242px;
    text-align: center;
  }
`;
