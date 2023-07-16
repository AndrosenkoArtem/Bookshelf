import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeStyledComponent';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import Home from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  const ifRefrashing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !ifRefrashing && (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    )
  );
};
