import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import useDate from '../../hooks/userHooks/useDate';
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
  const {
    year,
    month,
    date,
    setYear,
    setMonth,
    setDate,
    yearsRange,
    monthRange,
    dateRange,
    handleCheckBirthday,
  } = useDate();

  useEffect(() => {
    setYear(dayjs(user.birthday).get('year'));
    setMonth(dayjs(user.birthday).get('month') + 1);
    setDate(dayjs(user.birthday).get('date'));
  }, [user]);

  useEffect(() => {
    handleCheckBirthday(setBirthday);
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
