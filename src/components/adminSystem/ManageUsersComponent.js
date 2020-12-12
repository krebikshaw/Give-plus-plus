import React, { useState } from 'react';
import { SearchBar } from '../../components/adminSystem';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { DISTANCE, FONT, COLOR } from '../../constants/style';
import { Nav } from '../../components/Button';
import PaginationComponent from '../adminSystem/PaginationComponent';

const ExamineUserContainer = styled.div`
  margin: ${DISTANCE.md} 0;
`;

const UsersTable = styled.table`
  width: 100%;
  min-width: max-content;
`;

const UsersThead = styled.thead``;

const UsersTbody = styled.tbody``;

const UserTr = styled.tr``;

const UserTh = styled.th``;

const UserTd = styled.td`
  text-align: center;
  & a {
    justify-content: center;
  }
`;

const UserImage = styled.img`
  width: 80px;
  min-height: 80px;
  min-width: 80px;
`;

const PermissionText = styled.span`
  font-size: ${FONT.sm};
  color: ${(props) => (props.$status === 0 ? COLOR.text_1 : COLOR.text_alert)};
`;

const ResultNotFound = styled.span`
  font-size: ${FONT.sm};
  color: ${(props) => (props.$status === 0 ? COLOR.text_1 : COLOR.text_alert)};
  margin: 20px;
`;

const UsersItem = ({ user }) => {
  return (
    <UserTr>
      <UserTd>{user.id}</UserTd>
      <UserTd>
        {user.avatar_url ? (
          <UserImage src={user.avatar_url} alt='無法顯示' />
        ) : (
          <UserImage src='https://i.imgur.com/uqZxFCm.png' />
        )}
      </UserTd>
      <UserTd>{user.username}</UserTd>
      <UserTd>{user.nickname ? user.nickname : '無'}</UserTd>
      <UserTd>
        <Nav children={'連結'} path={`/products/vendor/${user.id}`} />
      </UserTd>
      <UserTd>
        <PermissionText $status={user.status}>
          {user.status === 0 ? '正常' : '停權'}
        </PermissionText>
      </UserTd>
      <UserTd>
        <Nav children={'編輯'} path={`/users/vendor/${user.id}`} />
      </UserTd>
    </UserTr>
  );
};

export default function ManageUsersComponent() {
  const { users, handleGetUsers, handleSearchUsers } = useAdmin();
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [params, setParams] = useState({
    sort: 'createdAt',
    order: 'DESC',
  });

  const handleSearch = (value) => {
    setKeyword(value);
    setIsSearch(true);
    setParams({
      ...params,
      keyword: value ? value : keyword,
    });
    handleSearchUsers({
      ...params,
      keyword: value ? value : keyword,
    });
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <ExamineUserContainer>
        <UsersTable>
          <UsersThead>
            <UserTr>
              <UserTh>id</UserTh>
              <UserTh>頭貼</UserTh>
              <UserTh>帳號</UserTh>
              <UserTh>名稱</UserTh>
              <UserTh>賣家頁面</UserTh>
              <UserTh>權限</UserTh>
              <UserTh>詳細資訊</UserTh>
            </UserTr>
          </UsersThead>
          <UsersTbody>
            {users.length === 0 ? (
              <UserTr>
                <UserTd>
                  <ResultNotFound>查無資料</ResultNotFound>
                </UserTd>
              </UserTr>
            ) : (
              users.map((user, index) => <UsersItem key={index} user={user} />)
            )}
          </UsersTbody>
        </UsersTable>
        <PaginationComponent
          propsFunction={isSearch ? handleSearchUsers : handleGetUsers}
          propsParams={params}
        />
      </ExamineUserContainer>
    </>
  );
}
