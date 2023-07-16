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
} from './SignIn.styled';
import { ReactComponent as Email } from 'images/email.svg';
// import { ReactComponent as Password } from 'images/password.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { LiaEyeSlash } from 'react-icons/lia';
import { LiaEyeSolid } from 'react-icons/lia';
import { IconContext } from 'react-icons';

const SignIn = () => {
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
    dispatch(signIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <EllipseBackground />
      <FormContainer>
        <GlobalStyles />
        <div>
          <Form onSubmit={handleSubmit}>
            <Label>
              <IconsCase>
                <Email />
              </IconsCase>
              <Input
                name="user-email"
                type="email"
                placeholder="EMAIL"
                required="requaried"
                onChange={e => setEmail(e.target.value)}
                value={email}
                maxLength="30"
              />
            </Label>
            <Label>
              <IconsCase
                onClick={() => setIsVisiblePassword(!isVisiblePassword)}
              >
                {isVisiblePassword ? (
                  <IconContext.Provider value={{ size: '24px' }}>
                    <LiaEyeSolid width="24px" height="24px" />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ size: '24px' }}>
                    <LiaEyeSlash />
                  </IconContext.Provider>
                )}
              </IconsCase>
              <Input
                name="user-password"
                type={isVisiblePassword ? 'text' : 'password'}
                placeholder="PASSWORD"
                required="requaried"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Label>
            <Submit type="submit">SIGN IN</Submit>
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
export default SignIn;
