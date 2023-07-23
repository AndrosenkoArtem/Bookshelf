import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
   font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.backgroundColor};
    -moz-osx-font-smoothing: grayscale;
  }
  html {
  scroll-behavior: smooth;
}
button {
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
p,
h1,
h2 {
  margin: 0px;
}
a {
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.hide {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0px;
  padding: 0px;
  clip: rect(0 0 0 0);
  overflow: hidden;
}
.center {
  display: flex;
  align-items: center;
}
`;
