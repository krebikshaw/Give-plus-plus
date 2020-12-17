import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOR, DISTANCE } from '../../constants/style';

const NavButton = styled(NavLink)`
  padding: ${DISTANCE.xs} 40px;
  margin: 0px ${DISTANCE.sm};
  display: inline-block;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
  border-radius: ${DISTANCE.xs};
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
