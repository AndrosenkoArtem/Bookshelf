import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { ReactComponent as Close } from 'images/close.svg';
import { NavLink } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #4F2EE8;
  }
`;
export const EllipseBackground = styled.div`
  position: absolute;
  transform: translate(-846px, -918px);
  z-index: -9999;
  border-radius: 1421px;
  width: 1421px;
  height: 1421px;
  background: rgba(204, 236, 231, 0.5);
  filter: blur(539.7910766601562px);
`;
export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 80px 40px 40px;
  border-radius: 18px;
  border: 2px solid #111;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.backgroundMain};
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const CloseIconCase = styled.button`
  display: contents;
`;
export const CloseIcon = styled(Close)`
  position: absolute;
  top: 31px;
  right: 31px;
  &:hover * {
    stroke: ${props => props.theme.purpleColor};
  }
`;
export const Label = styled.label`
  position: relative;
  width: 499px;
  &:not(:last-of-type) {
    margin-bottom: 28px;
  }
  &:last-of-type {
    margin-bottom: 40px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 64px;
  border-radius: 40px;
  border: 2px solid #111;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.18px;
  padding-left: 40px;
  padding-right: 70px;
  background-color: #0000;
  &:focus {
    outline-color: ${props => props.theme.purpleColor};
  }
  &::placeholder {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.18px;
    color: ${props => props.theme.blackColor};
  }
  &:focus-within + label,
  &:not(:placeholder-shown) + label {
    transform: translate(5px, -30px);
    font-size: 12px;
    color: ${props => props.theme.purpleColor};
  }
`;
export const Submit = styled.button`
  height: 64px;
  padding: 20px 173px;
  border-radius: 40px;
  justify-content: center;
  background-color: ${props => props.theme.blackColor};
  color: #f3f3f3;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.18px;
  margin-bottom: 20px;
`;
export const IconsCase = styled.div`
  cursor: pointer;
  position: absolute;
  top: 21px;
  right: 35px;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;
export const Li = styled.li`
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;
export const NavigationLink = styled(NavLink)`
  color: rgba(17, 17, 17, 0.5);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.18px;
  &.active {
    color: #4f2ee8;
    text-decoration-line: underline;
  }
`;
