import React from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentRule } from '../../redux/slices/generalSlice/generalSlice';

const AnnouncementWrapper = styled.div`
  min-width: 500px;
  padding: ${DISTANCE.sm} ${DISTANCE.lg};
  margin: ${DISTANCE.md} 0px;
  background: ${COLOR.bg_secondary};
  border-radius: 12px;
`;

const AnnouncementTitle = styled.h2`
  color: ${COLOR.text_3};
  font-size: ${FONT.md};
  margin: ${DISTANCE.xs} 0;
`;

const AnnouncementContent = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.xs};
`;

const AnnouncementAlert = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xs};
`;

const AnnouncementLink = styled(NavLink)`
  color: ${COLOR.text_1};
  font-size: ${FONT.xs};
  margin: ${DISTANCE.xs} 0;
`;

export default function Announcement({ isApply }) {
  const dispatch = useDispatch();

  return (
    <AnnouncementWrapper>
      <AnnouncementTitle>小提醒</AnnouncementTitle>
      {isApply && (
        <AnnouncementAlert>
          請確實填妥以下欄位，已開通賣家資格。
        </AnnouncementAlert>
      )}
      <AnnouncementContent>
        如果你不希望你的真實姓名被列入本平台及其他外部搜尋引擎的搜尋結果，建議你選擇一個暱稱使用。網站將依照個人資料保護法保障你的個人隱私！
      </AnnouncementContent>
      <AnnouncementLink
        target='_blank'
        onClick={() => dispatch(setCurrentRule('rule3'))}
        to={'/rules#rule3'}
        children={'隱私權政策'}
      />
    </AnnouncementWrapper>
  );
}
