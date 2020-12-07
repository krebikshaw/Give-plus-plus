import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Navbar, IconComponent } from '../../../components';
import { COLOR, FONT, DISTANCE } from '../../../constants/style';
import { ThickNavPage } from '../../../components/Page';
import useUser from '../../../hooks/userHooks/useUser';

const Wrapper = styled.div`
  padding: 50px;
`;

const Title = styled.h1`
  color: ${COLOR.black};
  font-size: ${FONT.lg};
`;

const AnnouncementWrapper = styled.div`
  height: 100px;
  padding: ${DISTANCE.sm};
  margin: ${DISTANCE.md} 0px;
  background: ${COLOR.bg_secondary};
`;

const AnnouncementTitle = styled.h2`
  color: ${COLOR.text_3};
  font-size: ${FONT.md};
`;

const Announcement = () => {
  return (
    <AnnouncementWrapper>
      <AnnouncementTitle>小提醒</AnnouncementTitle>
    </AnnouncementWrapper>
  );
};

const UserInfoPage = () => {
  const { user, handleGetMe, errorMessage } = useUser();

  useEffect(() => {
    handleGetMe();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  return (
    <>
      <Navbar />
      <ThickNavPage>
        <Wrapper>
          <Title>基本資料</Title>
          <Announcement />
        </Wrapper>
      </ThickNavPage>
    </>
  );
};

export default UserInfoPage;
