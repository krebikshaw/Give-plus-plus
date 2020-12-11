import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOR } from '../../constants/style';

const NavButton = styled(NavLink)`
  padding: 10px 40px;
  margin: 0px 20px;
  display: inline-block;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
  border-radius: 10px;
  border: solid 1px ${COLOR.black};
  background-color: ${COLOR.bg_primary};
  text-align: center;
  text-decoration: none;
  color: ${COLOR.black};
  cursor: pointer;
  &:hover {
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

export default NavButton;
