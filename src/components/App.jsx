import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './ThemeStyledComponent';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import Home from 'pages/Home/Home';
import ShoppingList from 'pages/ShoppingList/ShoppingList';
import { selectTheme } from 'redux/theme/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const ifRefrashing = useSelector(selectIsRefreshing);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !ifRefrashing && (
      <ThemeProvider theme={!theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Shopping-list" element={<ShoppingList />}></Route>
          </Route>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    )
  );
};
//
