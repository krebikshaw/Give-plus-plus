import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { EFFECT, MEDIA_QUERY } from '../constants/style';

const LogoComponent = styled(Link)`
  position: absolute;
  top: -10px;
  left: 55px;
  background: url(${process.env.PUBLIC_URL}/logo.svg) center/cover;
  height: 60px;
  width: 120px;
  text-shadow: ${EFFECT.shadowDark};
  ${MEDIA_QUERY.md} {
    left: 20px;
  }
`;

const Logo = () => {
  return <LogoComponent to='/' />;
};

export default Logo;
