import React, { useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import useSet from '../../hooks/userHooks/useSet';
import { WrapperMask } from '../userSystem';
import { COLOR, FONT, DISTANCE, EFFECT } from '../../constants/style';
import { ActionButton } from '../../components/Button';

const SetBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PreviewBanner = styled.img`
  box-shadow: ${EFFECT.shadowInput};
  height: 200px;
  width: 600px;
  border-radius: 15px;
  object-fit: cover;
`;

const RightSide = styled.div`
  min-width: max-content;
  margin-top: ${DISTANCE.md};
`;

const Description = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.xs};
  margin-bottom: ${DISTANCE.md};
`;

const Label = styled.label`
  border: solid 1px transparent;
  border-radius: 8px;
  padding: ${(props) => (props.$size === 'lg' ? '10px 90px' : '10px 20px')};
  background-color: ${COLOR.btn_primary};
  color: ${COLOR.white};
  margin: ${DISTANCE.md} 0;
  min-width: max-content;
  width: 200px;
  &:hover {
    transform: scale(1.05);
  }
`;

const InputFile = styled.input`
  display: none;
`;

const CheckImage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: max-content;
  padding: 20px 250px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLOR.bg_primary};
`;

const CheckBanner = styled.img`
  box-shadow: ${EFFECT.shadowInput};
  height: 200px;
  width: 600px;
  border-radius: 15px;
  object-fit: cover;
`;

const Title = styled.h1`
  margin: ${DISTANCE.md} auto;
  color: ${COLOR.black};
  font-size: ${FONT.sm};
`;

const TwoButton = styled.div`
  margin: ${DISTANCE.md} auto;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ErrorMessage = styled.p`
  color: ${COLOR.text_alert};
  font-size: ${FONT.sm};
`;

const LoadingMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  color: ${COLOR.text_1};
  font-size: ${FONT.lg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SetBanner({ setSuccessMode }) {
  const { user } = useUser();
  const {
    isCheckImage,
    uploadError,
    isLoadingUpload,
    bannerUrl,
    setBannerUrl,
    handleChangeBannerFile,
    handleSubmitSetBanner,
    handleCancelSetBanner,
  } = useSet();

  useEffect(() => {
    if (user.banner_url) setBannerUrl(user.banner_url);
  }, [user]);

  return (
    <SetBannerContainer>
      <PreviewBanner src={bannerUrl} alt='圖片載入失敗' />
      <RightSide>
        <Description>
          從電腦中選取圖檔<br></br>最佳大小為 250 x 1140px
        </Description>
        <Label>
          <InputFile type='file' onChange={handleChangeBannerFile} />
          選擇圖片
        </Label>
        {isCheckImage && (
          <WrapperMask>
            <CheckImage>
              <Title>是否上傳這張照片？</Title>
              <CheckBanner src={bannerUrl} alt='圖片載入失敗' />
              {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
              <TwoButton>
                <ActionButton
                  $margin={0}
                  onClick={() => handleSubmitSetBanner(setSuccessMode)}
                >
                  確定
                </ActionButton>
                <ActionButton
                  $bg={'red'}
                  $margin={0}
                  onClick={() => handleCancelSetBanner(setSuccessMode)}
                >
                  取消
                </ActionButton>
              </TwoButton>
            </CheckImage>
            {isLoadingUpload && <LoadingMask>Loading...</LoadingMask>}
          </WrapperMask>
        )}
      </RightSide>
    </SetBannerContainer>
  );
}
