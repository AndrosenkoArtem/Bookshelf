import styled from 'styled-components';
import { ReactComponent as Down } from 'images/downPagin.svg';
import { ReactComponent as DownDown } from 'images/downDownPagin.svg';
import { ReactComponent as Up } from 'images/upPagin.svg';
import { ReactComponent as UpUp } from 'images/upUpPagin.svg';
import { ReactComponent as UpDown } from 'images/UpDown.svg';

export const Container = styled.div`
  margin: 40px auto;
`;
export const Page = styled.button`
  width: 44px;
  height: 44px;
  background-color: #0000;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.titleColor};
  color: ${props => props.theme.titleColor};
  transition: auto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  &:nth-of-type(3) {
    margin-right: 10px;
    margin-left: 24px;
    @media (max-width: 425px) {
      margin-right: 5px;
      margin-left: 14px;
    }
  }
  &:nth-of-type(4) {
    margin-right: 10px;
    @media (max-width: 425px) {
      margin-right: 5px;
    }
  }
  &:nth-last-of-type(3) {
    margin-left: 10px;
    margin-right: 24px;
    @media (max-width: 425px) {
      margin-left: 5px;
      margin-right: 14px;
    }
  }
  &:nth-of-type(5) {
    margin-left: 0px;
  }
  &.active {
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.blackColor};
  }
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
`;
export const Back = styled.button`
  display: contents;

  &:nth-of-type(3) svg {
    margin-left: 24px;
    margin-right: 10px;
    @media (max-width: 425px) {
      margin-left: 14px;
      margin-right: 5px;
    }
  }
`;
export const Forward = styled.button`
  display: contents;
  &:nth-last-of-type(3) svg {
    margin-left: 10px;
    margin-right: 24px;
    @media (max-width: 425px) {
      margin-left: 5px;
      margin-right: 14px;
    }
  }
`;
export const DownIcon = styled(Down)`
  margin-left: 8px;
  vertical-align: bottom;
  path {
    fill: ${props => props.color};
  }
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
    margin-left: 5px;
  }
`;
export const DownDownIcon = styled(DownDown)`
  vertical-align: bottom;
  path {
    fill: ${props => props.color};
  }
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
`;
export const UpIcon = styled(Up)`
  margin-right: 8px;
  vertical-align: bottom;
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
`;
export const UpUpIcon = styled(UpUp)`
  vertical-align: bottom;
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
`;
export const UpDownIcon = styled(UpDown)`
  vertical-align: bottom;
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
  path {
    fill: ${props => props.color};
  }
  circle {
    stroke: ${props => props.color};
  }
`;
