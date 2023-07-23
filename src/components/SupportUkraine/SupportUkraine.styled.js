import styled from 'styled-components';
import { ReactComponent as Gerb } from 'images/gerb.svg';
import { ReactComponent as ArrowDown } from 'images/arrowSupportUkr.svg';

export const Container = styled.div`
  height: fit-content;
  width: 356px;
  border-radius: 16px;
  padding: 24px 0px;
  margin-bottom: 142px;
  background: radial-gradient(
    189.32% 190.93% at 59.76% -23.42%,
    #4f2ee8 18.03%,
    #fff 100%
  );
  box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
`;
export const Title = styled.h2`
  color: ${props => props.theme.textColor};
  margin-left: 40px;
  margin-bottom: 40px;
`;
export const Img = styled.img`
  filter: brightness(0) invert();
  margin-left: 14px;
`;
export const Li = styled.li`
  display: flex;
  margin-left: 40px;
  align-items: center;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;
export const P = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.56px;
`;
export const GerbIcon = styled(Gerb)`
  vertical-align: bottom;
  margin-left: 12px;
`;
export const CollapsesContainer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: 1s;
  &.isActive {
    max-height: fit-content;
  }
`;
export const Button = styled.button`
  display: contents;
`;
export const ArrowDownIcon = styled(ArrowDown)`
  width: 100%;
  margin: auto;
  transform: rotate(${props => props.rotate.isCollapse && '180deg'});
`;
