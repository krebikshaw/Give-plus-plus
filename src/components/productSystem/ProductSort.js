import { COLOR, FONT } from '../../constants/style';
import styled from 'styled-components';

const ProductSelect = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT.xs};
`;

const SortName = styled.div`
  margin-right: 40px;
`;

const Select = styled.select`
  width: 195px;
  padding: 5px 2px;
  color: ${COLOR.text_2};

  option {
    color: ${COLOR.text_2};
  }
`;

export const ProductSort = ({ id, handleChangeProductSort }) => {
  return (
    <ProductSelect>
      <SortName>排序</SortName>
      <Select onChange={(e) => handleChangeProductSort(id, e.target.value, 1)}>
        <option value={'latest'}>最新上架</option>
        <option value={'lowToHight'}>價格低到高</option>
        <option value={'hightToLow'}>價格高到低</option>
      </Select>
    </ProductSelect>
  );
};
