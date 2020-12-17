import styled from 'styled-components';
import { DISTANCE } from '../../constants/style';
import { NavLink } from 'react-router-dom';
import { NormalButton } from '../../components/Button';

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(NormalButton)`
  padding: 8px 45px;
  border-radius: 12px;
  &:last-child {
    margin-left: ${DISTANCE.sm};
  }
`;

export const ButtonsBox = ({ handleSubmitForm }) => {
  return (
    <ButtonContainer>
      <Button $margin={0} onClick={handleSubmitForm}>
        送出
      </Button>
      <NavLink to="/">
        <Button $margin={0}>返回</Button>
      </NavLink>
    </ButtonContainer>
  );
};
