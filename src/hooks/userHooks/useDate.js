import { useState } from 'react';
import dayjs from 'dayjs';

export default function useDate() {
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

  const handleCheckBirthday = (setBirthday) => {
    const birthdayAuth = dayjs(`${year}-${month}-${date}`, 'YYYY-MM-DD')
      .format()
      .split('T')[0];
    setBirthday(birthdayAuth);
  };

  return {
    year,
    month,
    date,
    startYear,
    endYear,
    yearsRange,
    monthRange,
    dateRange,
    setYear,
    setMonth,
    setDate,
    handleCheckBirthday,
  };
}
