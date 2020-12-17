import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../../hooks/userHooks/useUser';
import { useNavigate } from 'react-router-dom';
import { WrapperMask } from '../../../components/userSystem/';
import { COLOR, FONT, EFFECT, DISTANCE } from '../../../constants/style';
import { ActionButton } from '../../../components/Button';
import {
  Announcement,
  VendorInfoForm,
  SetAvatarComponent,
  SetBannerComponent,
} from '../../../components/userSystem';
import { ThickNavPage } from '../../../components/Page';

const Wrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 30px 0;
`;

const Title = styled.h1`
  color: ${COLOR.black};
  font-size: ${FONT.lg};
`;

const Text = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  margin: ${DISTANCE.lg} 0 ${DISTANCE.sm} 0;
`;

const ErrorText = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.xss};
  margin-top: 15px;
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  min-width: 40vw;
  color: ${COLOR.text_1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${FONT.lg};
  border-radius: 15px;
  background: ${COLOR.light_primary};
  box-shadow: ${EFFECT.shadowDark};
  & p {
    margin: 20px;
  }
`;

const CheckComponent = styled.div``;

const CheckImage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: max-content;
  padding: 80px 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLOR.bg_primary};
`;

const TwoButton = styled.div`
  margin: ${DISTANCE.md} auto 0 auto;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ApplyForVendorPage = () => {
  const { handleApplyForVendor } = useUser();
  const navigate = useNavigate();
  const [successMode, setSuccessMode] = useState(false);
  const [isCheck, setIsCheck] = useState(true);
  const { handleGetMe, errorMessage } = useUser();

  const handleCheck = () => {
    setIsCheck(false);
    handleApplyForVendor();
  };
  const handleCancel = () => navigate('/');

  useEffect(() => {
    window.scroll(0, 0);
    handleGetMe().then((result) => {
      if (result.data.is_vendor) return navigate('/');
    });
  }, []);

  return (
    <ThickNavPage>
      <Wrapper>
        {isCheck && (
          <CheckComponent>
            <WrapperMask>
              <CheckImage>
                <Title>是否要申請成為賣家？</Title>
                <TwoButton>
                  <ActionButton $margin={0} onClick={handleCheck}>
                    我要
                  </ActionButton>
                  <ActionButton $bg={'red'} $margin={0} onClick={handleCancel}>
                    不要
                  </ActionButton>
                </TwoButton>
              </CheckImage>
            </WrapperMask>
          </CheckComponent>
        )}
        <Title>基本資料</Title>
        <Announcement isApply={true} />
        <VendorInfoForm setSuccessMode={setSuccessMode} />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <Text>變更頭貼</Text>
        <SetAvatarComponent setSuccessMode={setSuccessMode} />
        <Text>變更封面</Text>
        <SetBannerComponent setSuccessMode={setSuccessMode} />
        {successMode && (
          <WrapperMask>
            <SuccessMessage>
              <p>編輯成功</p>
              <ActionButton onClick={() => setSuccessMode(false)}>
                確定
              </ActionButton>
            </SuccessMessage>
          </WrapperMask>
        )}
      </Wrapper>
    </ThickNavPage>
  );
};

export default ApplyForVendorPage;
