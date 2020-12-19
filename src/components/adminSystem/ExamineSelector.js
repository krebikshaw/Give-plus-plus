import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { EFFECT } from '../../constants/style';

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
  cursor: pointer;
  background: ${(props) => props.$bg === '0' && '#5de05d82'}
    ${(props) => props.$bg === '通過' && '#5dcee082'}
    ${(props) => props.$bg === '未通過' && '#e05d5d82'};
`;

const OptionComponent = styled.option``;

export default function ExamineSelector({ product }) {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const { handleUpdateProductStatus } = useAdmin();

  const handleChangeSelector = (e) => {
    setValue(e.target.value);
    setIsChecked(true);
    const status = e.target.value === '通過' ? '1' : '2';
    handleUpdateProductStatus(product.id, status);
  };

  useEffect(() => {
    setValue(product.status);
  }, []);

  return (
    <ExamineContainer>
      <Selector onChange={handleChangeSelector} value={value} $bg={value}>
        {!isChecked && <OptionComponent>待審查</OptionComponent>}
        <OptionComponent>通過</OptionComponent>
        <OptionComponent>未通過</OptionComponent>
      </Selector>
    </ExamineContainer>
  );
}
