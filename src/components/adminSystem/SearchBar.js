import React, { useState } from 'react';
import styled from 'styled-components';
import { EFFECT, COLOR } from '../../constants/style';
import { IconComponent } from '../../components';
import { InputSearch } from '../Input';

const SearchBarContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 32px;
  border-radius: 8px;
  background: ${COLOR.bg_secondary};
  margin: 20px 0;
  box-shadow: ${EFFECT.shadowLight};
  & div {
    display: flex;
    align-items: center;
  }
`;

const SearchArea = styled.div`
  width: 90%;
`;

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState('');
  const handleChangeInput = (e) => setValue(e.target.value);

  return (
    <SearchBarContainer>
      <SearchArea>
        <IconComponent kind={'search'} />
        <InputSearch
          value={value}
          onChange={handleChangeInput}
          placeholder='搜尋'
          onKeyDown={(e) => {
            if (e.keyCode === 13 && value !== '') {
              handleSearch(value);
              setValue('');
            }
          }}
        />
      </SearchArea>
      <IconComponent kind={'angle-down'} />
    </SearchBarContainer>
  );
};

export default SearchBar;
