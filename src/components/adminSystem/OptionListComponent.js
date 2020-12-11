import React from 'react';
import styled from 'styled-components';
import { DISTANCE } from '../../constants/style';
import { Nav } from '../../components/Button';

const OptionListContainer = styled.div`
  margin: ${DISTANCE.md} 0;
  min-width: max-content;
`;

const OptionList = styled.ul`
  display: flex;
  align-items: center;
`;

const OptionItem = styled.li``;

export default function OptionListComponent() {
  return (
    <OptionListContainer>
      <OptionList>
        <OptionItem>
          <Nav children={'商品管理'} path={'/admin/products'} $margin={0} />
        </OptionItem>
        <OptionItem>
          <Nav children={'用戶管理'} path={'/admin/users'} />
        </OptionItem>
        <OptionItem>
          <Nav children={'查看意見箱'} path={'admin/mails'} $margin={0} />
        </OptionItem>
      </OptionList>
    </OptionListContainer>
  );
}
