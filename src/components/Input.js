import styled from 'styled-components';
import { COLOR, FONT, EFFECT } from '../constants/style';

export const InputSearch = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  background: rgba(0, 0, 0, 0);
`;

export const InputComponent = styled.input`
  height: 30px;
  width: ${(props) => (props.$size === 'lg' ? '500px' : '250px')};
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 3px;
  margin: ${(props) => (props.$margin == 0 ? '0' : '20px')};
`;

export const TextAreaComponent = styled.textarea`
  width: ${(props) => (props.$size === 'lg' ? '600px' : '400px')};
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 5px;
  margin: ${(props) => (props.$margin == 0 ? '0' : '20px')};
`;
