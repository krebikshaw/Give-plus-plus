import styled from 'styled-components';
import { IconComponent } from '../../components';
import { COLOR, FONT } from '../../constants/style';
import { NavLink } from 'react-router-dom';

const InputBox = styled.div`
  margin-bottom: 20px;
  width: 70%;
`;

const InputTitle = styled.h2`
  margin: 0 0 10px 15px;
  font-size: ${FONT.xs};
  font-weight: 400;
  color: ${COLOR.text_2};
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 3px 10px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid ${COLOR.text_2};
  font-size: ${FONT.sm};
`;

const Input = styled.input`
  width: 85%;
  font-size: ${FONT.xs};
  color: ${COLOR.text_2};
  letter-spacing: 2px;
  ::placeholder {
    color: ${COLOR.text_2};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  color: ${COLOR.text_alert};
`;

const Links = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${COLOR.text_2};
`;

const Link = styled(NavLink)`
  display: inline-block;
  color: ${COLOR.text_2};
  &:hover {
    color: ${COLOR.hover};
  }
`;

export default function JoinInput({
  title,
  type,
  message,
  linksType,
  limit,
  handleInputChange,
  togglePassword,
  isPasswordShowed,
  errorMessage,
}) {
  return (
    <InputBox>
      <InputTitle>{title}</InputTitle>
      <InputWrapper>
        {type === 'password' && <IconComponent kind={'lock'} />}
        {type === 'username' && <IconComponent kind={'user'} />}
        {type === 'email' && <IconComponent kind={'envelope'} />}

        <Input
          type={type === 'password' && !isPasswordShowed ? 'password' : 'text'}
          maxLength={limit}
          onChange={handleInputChange}
          placeholder={message}
        ></Input>

        {type === 'password' && (
          <span onClick={togglePassword}>
            <IconComponent kind={'invisible'} />
          </span>
        )}
      </InputWrapper>

      <ErrorMessage>{errorMessage}</ErrorMessage>

      {linksType === 'password' && (
        <Links>
          <Link to={'#'}>忘記密碼</Link> ｜ <Link to={'#'}>重寄認證信</Link>
        </Links>
      )}
    </InputBox>
  );
}
