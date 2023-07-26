import { useDispatch, useSelector } from 'react-redux';
import {
  ArrowRight,
  NavigationLink,
  Auth,
  UserIcon,
  ArrowDownIcon,
  LogOut,
  UserName,
} from './AuthNav.styled';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { useState } from 'react';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {isLoggedIn ? (
        <Auth onClick={() => setIsOpen(!isOpen)}>
          {<UserIcon />} <UserName>{user.name}</UserName>
          {<ArrowDownIcon />}
          <LogOut onClick={() => dispatch(logout())}>
            Log out <ArrowRight />
          </LogOut>
        </Auth>
      ) : (
        <NavigationLink to="/sign-up">
          Sign up <ArrowRight />
        </NavigationLink>
      )}
    </>
  );
};
