import {
  GlobalStyles,
  EllipseBackground,
  FormContainer,
  Form,
  CloseIcon,
  Label,
  Input,
  Submit,
  IconsCase,
  NavigationLink,
  Ul,
  Li,
  CloseIconCase,
} from './SignUp.styled';
import { ReactComponent as Email } from 'images/email.svg';
import { ReactComponent as Password } from 'images/password.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { LiaEyeSlash } from 'react-icons/lia';
// import { LiaEyeSolid } from 'react-icons/lia';
// import { IconContext } from 'react-icons';
const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const isloggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    isloggedIn && redirect('/');
  }, [isloggedIn, redirect]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name: userName, email, password }));
    setEmail('');
    setPassword('');
    setUserName('');
  };
  return (
    <>
      <EllipseBackground />
      <FormContainer>
        <GlobalStyles />
        <div>
          <Form onSubmit={handleSubmit}>
            <Label>
              <Input
                name="user-name"
                type="text"
                placeholder="NAME"
                required="requaried"
                onChange={e => setUserName(e.target.value)}
                value={userName}
                maxLength="30"
                autocomplete="new-password"
              />
            </Label>
            <Label>
              <IconsCase>{<Email />}</IconsCase>
              <Input
                name="user-email"
                type="email"
                placeholder="EMAIL"
                required="requaried"
                onChange={e => setEmail(e.target.value)}
                value={email}
                autocomplete="new-password"
              />
            </Label>
            <Label>
              <IconsCase
                onClick={e =>
                  e.currentTarget.nextSibling.value.trim() !== '' &&
                  setIsVisiblePassword(!isVisiblePassword)
                }
              >
                <Password />
              </IconsCase>
              <Input
                name="user-password"
                type={isVisiblePassword ? 'text' : 'password'}
                placeholder="PASSWORD"
                required="requaried"
                onChange={e => setPassword(e.target.value)}
                value={password}
                autocomplete="new-password"
              />
            </Label>
            <Submit type="submit">SIGN UP</Submit>
          </Form>
          <Ul>
            <Li>
              <NavigationLink to="/sign-up">SIGN UP</NavigationLink>
            </Li>
            <Li>
              <NavigationLink to="/sign-in">SIGN IN</NavigationLink>
            </Li>
          </Ul>
          <CloseIconCase type="button" onClick={() => redirect('/')}>
            <CloseIcon width="14px" height="14px" />
          </CloseIconCase>
        </div>
      </FormContainer>
    </>
  );
};
export default SignUp;
