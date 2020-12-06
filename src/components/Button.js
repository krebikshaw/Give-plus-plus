import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { COLOR, FONT, EFFECT } from '../constants/style';
import IconComponent from './Icon';

const ButtonWrapper = styled.button`
  padding: 5px 10px;
  min-width: fit-content;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
  border: solid 1px ${COLOR.black};
  color: ${COLOR.black};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

const HelperButtonWrapper = styled(ButtonWrapper)`
  position: fixed;
  right: 50px;
  bottom: 100px;
  display: flex;
  align-items: center;
  border: solid 1px transparent;
  border-radius: 25px;
  padding: 3px 20px 3px 13px;
  background-color: ${COLOR.btn_primary};
  color: ${COLOR.black};
  font-size: ${FONT.sm};
  font-weight: 800;
  min-width: max-content;
  box-shadow: ${EFFECT.shadowDark};
  &:hover {
    transform: scale(1.05);
  }
`;

export const NormalButton = styled(ButtonWrapper)`
  padding: 5px 10px;
  border-radius: 4px;
  border: solid 1px ${COLOR.black};
  background-color: ${COLOR.bg_primary};
  color: ${COLOR.black};
  margin: 0px ${(props) => (props.$margin === 0 ? 0 : 20)}px;
  min-width: max-content;
  &:hover {
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

export const ActionButton = styled(ButtonWrapper)`
  border: solid 1px transparent;
  border-radius: 8px;
  padding: ${(props) => (props.$size === 'lg' ? '10px 90px' : '10px 20px')};
  background-color: ${COLOR.btn_primary};
  color: ${COLOR.white};
  margin: 0px ${(props) => (props.$margin === 0 ? 0 : 20)}px;
  min-width: max-content;
  &:hover {
    transform: scale(1.05);
  }
`;

export function HelperButton() {
  return (
    <HelperButtonWrapper>
      <IconComponent kind={'question-circle'} margin={0} />
      幫助
    </HelperButtonWrapper>
  );
}

export function Nav({ children, path, $margin }) {
  return (
    <NavLink style={{ minWidth: 'fit-content' }} to={path}>
      <NormalButton $margin={$margin}>{children}</NormalButton>
    </NavLink>
  );
}
