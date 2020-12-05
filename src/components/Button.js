import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { COLOR, FONT } from '../constants/style';
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
  display: flex;
  align-items: center;
  border: solid 1px transparent;
  border-radius: 25px;
  padding: 5px 15px;
  background-color: ${COLOR.btn_primary};
  color: ${COLOR.black};
  font-size: ${FONT.sm};
  font-weight: 800;
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
  &:hover {
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

export const ActionButton = styled(ButtonWrapper)`
  border: solid 1px transparent;
  border-radius: 4px;
  padding: ${(props) => (props.$size === 'lg' ? '10px 90px' : '10px 40px')};
  background-color: ${COLOR.btn_primary};
  color: ${COLOR.white};
`;

export function HelperButton() {
  return (
    <HelperButtonWrapper>
      <IconComponent kind={'question-circle'} />
      幫助
    </HelperButtonWrapper>
  );
}

export function Nav({ children, path }) {
  return (
    <NavLink style={{ minWidth: 'fit-content' }} to={path}>
      <NormalButton>{children}</NormalButton>
    </NavLink>
  );
}
