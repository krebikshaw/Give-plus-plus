import styled from 'styled-components';
import { COLOR } from '../../constants/style';
const RadioInput = styled.input`
  margin-right: 10px;
`;

const RadioLabel = styled.label`
  color: ${COLOR.text_2};
  width: 150px;
  margin: 5px 0;
`;

export const Radio = ({ children, value, name, handleChange, checked }) => {
  return (
    <RadioLabel>
      {checked ? (
        <RadioInput
          $margin={0}
          rows='15'
          type='radio'
          value={value}
          name={name}
          onChange={handleChange}
          checked={true}
        ></RadioInput>
      ) : (
        <RadioInput
          $margin={0}
          rows='15'
          type='radio'
          value={value}
          name={name}
          onChange={handleChange}
        ></RadioInput>
      )}
      {children}
    </RadioLabel>
  );
};
