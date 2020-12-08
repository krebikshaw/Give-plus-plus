import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { COLOR, FONT, EFFECT } from '../../constants/style';

const BirthdayContainer = styled.div`
  min-width: max-content;
`;

const YearsSelector = styled.select`
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

const MonthSelector = styled.select`
  height: 30px;
  width: 60px;
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 3px;
`;

const DateSelector = styled.select`
  height: 30px;
  width: 60px;
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 3px;
`;

const Unit = styled.span`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  margin: 0 20px;
`;

export default function BirthdaySelector({ setBirthday }) {
  const { user } = useUser();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const startYear = dayjs().get('year') - 80;
  const endYear = dayjs().get('year');
  const yearsRange = [];
  for (let i = startYear; i <= endYear; i++) {
    yearsRange.push(i);
  }
  const monthRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dateRange = [];
  for (let i = 1; i <= 31; i++) {
    dateRange.push(i);
  }

  const handleCheckBirthday = () => {
    const birthdayAuth = dayjs(`${year}-${month}-${date}`, 'YYYY-MM-DD')
      .format()
      .split('T')[0];
    setBirthday(birthdayAuth);
  };

  useEffect(() => {
    setYear(dayjs(user.birthday).get('year'));
    setMonth(dayjs(user.birthday).get('month') + 1);
    setDate(dayjs(user.birthday).get('date'));
  }, [user]);

  useEffect(() => {
    handleCheckBirthday();
  }, [year, month, date]);

  return (
    <BirthdayContainer>
      <YearsSelector
        onChange={(e) => setYear(e.target.value)}
        value={year ? year : '請選擇...'}
      >
        {yearsRange.map((yearItem, index) => {
          return <OptionComponent key={index}>{yearItem}</OptionComponent>;
        })}
      </YearsSelector>
      <Unit>年</Unit>
      <MonthSelector
        onChange={(e) => setMonth(e.target.value)}
        value={month ? month : '請選擇...'}
      >
        {monthRange.map((monthItem, index) => {
          return <OptionComponent key={index}>{monthItem}</OptionComponent>;
        })}
      </MonthSelector>
      <Unit>月</Unit>
      <DateSelector
        onChange={(e) => setDate(e.target.value)}
        value={date ? date : '請選擇...'}
      >
        {dateRange.map((dateItem, index) => {
          return <OptionComponent key={index}>{dateItem}</OptionComponent>;
        })}
      </DateSelector>
      <Unit>日</Unit>
    </BirthdayContainer>
  );
}
