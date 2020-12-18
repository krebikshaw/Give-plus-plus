import styled from 'styled-components';
import { Radio } from './Radio';

const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const RadioBox = ({ title, options, handleChange, oldValue }) => {
  return (
    <RadioContainer>
      {options.map((option) => (
        <Radio
          key={option.id}
          name={title}
          value={option.id}
          children={option.name}
          handleChange={handleChange}
          checked={oldValue === option.id}
        />
      ))}
    </RadioContainer>
  );
};
