import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, EFFECT } from '../../constants/style';

const ExamineContainer = styled.div`
  min-width: max-content;
`;

const Selector = styled.select`
  height: 30px;
  width: 100px;
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 3px;
`;

const OptionComponent = styled.option``;

export default function ExamineSelector({ product }) {
  const [value, setValue] = useState('');

  const handleChangeSelector = (e) => {
    setValue(e.target.value);
    //handleCheckProduct();
  };

  useEffect(() => {
    setValue(product.status);
  }, []);

  return (
    <ExamineContainer>
      <Selector onChange={handleChangeSelector} value={value}>
        <OptionComponent>未審查</OptionComponent>
        <OptionComponent>已審查</OptionComponent>
      </Selector>
    </ExamineContainer>
  );
}
