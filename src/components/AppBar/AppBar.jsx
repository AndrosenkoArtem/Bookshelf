import { Switch } from 'components/Switch/Switch';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { ReactComponent as Logo } from 'images/logoWhite.svg';
import {
  Container,
  Header,
  AutchNavContainer,
  NavigationLink,
  Nav,
  LinkIcon,
} from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <LinkIcon to="/">
          <Logo />
        </LinkIcon>
        {isLoggedIn && (
          <Nav>
            <NavigationLink to="/">HOME</NavigationLink>
            <NavigationLink to="/shopping-list">SHOPPING LIST</NavigationLink>
          </Nav>
        )}
        <AutchNavContainer>
          <Switch />
          <AuthNav />
        </AutchNavContainer>
      </Container>
    </Header>
  );
};
