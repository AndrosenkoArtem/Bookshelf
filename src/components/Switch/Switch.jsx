import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Span } from './Switch.styled';
import { selectTheme } from 'redux/theme/selectors';
import { changeTheme } from 'redux/theme/slice';

export const Switch = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <Label>
      <Input
        onChange={e => dispatch(changeTheme(e.target.checked))}
        type="checkbox"
        checked={theme}
      />
      <Span></Span>
    </Label>
  );
};
