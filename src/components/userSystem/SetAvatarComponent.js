import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { WrapperMask } from '../userSystem';
import { COLOR, FONT, DISTANCE, EFFECT } from '../../constants/style';
import { InputComponent } from '../../components/Input';
import IconComponent from '../../components/Icon';
import { ActionButton } from '../../components/Button';
import { setErrorMessage } from '../../redux/slices/productSlice/productSlice';

const SetAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PreviewAvatar = styled.img`
  box-shadow: ${EFFECT.shadowInput};
  height: 250px;
  width: 250px;
  border-radius: 15px;
  object-fit: cover;
`;

const RightSide = styled.div`
  padding: ${DISTANCE.md};
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

const CheckAvatar = styled.img`
  box-shadow: ${EFFECT.shadowInput};
  height: 300px;
  width: 300px;
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

export default function SetAvatarComponent({ setSuccessMode }) {
  const { user, handleUploadAvatar } = useUser();
  const [isCheckImage, setIsCheckImage] = useState(false);
  const [uploadEvent, setUploadEvent] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRis-FmrF5lq1jBAEO8tSMrnwGU_yQsfMe8LA&usqp=CAU'
  );

  const handleChangeFile = (e) => {
    setUploadEvent(e.target.files[0]);
    const file = e.target.files.item(0);
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      setAvatarUrl(e.target.result);
      setIsCheckImage(true);
    });

    fileReader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    setUploadError('');
    handleUploadAvatar(uploadEvent).then((result) => {
      if (result.ok === 0) return setUploadError(result.message);
      setIsCheckImage(false);
      setSuccessMode(true);
    });
  };

  useEffect(() => {
    if (user.avatar_url) setAvatarUrl(user.avatar_url);
  }, [user]);

  return (
    <SetAvatarContainer>
      <PreviewAvatar src={avatarUrl} alt='圖片載入失敗' />
      <RightSide>
        <Description>
          從電腦中選取圖檔<br></br>最佳大小為 600 x 600px
        </Description>
        <Label>
          <InputFile type='file' onChange={handleChangeFile} />
          選擇圖片
        </Label>
        {isCheckImage && (
          <WrapperMask>
            <CheckImage>
              <Title>是否上傳這張照片？</Title>
              <CheckAvatar src={avatarUrl} alt='圖片載入失敗' />
              {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
              <TwoButton>
                <ActionButton $margin={0} onClick={handleSubmit}>
                  確定
                </ActionButton>
                <ActionButton
                  $bg={'red'}
                  $margin={0}
                  onClick={() => setIsCheckImage(false)}
                >
                  取消
                </ActionButton>
              </TwoButton>
            </CheckImage>
          </WrapperMask>
        )}
      </RightSide>
    </SetAvatarContainer>
  );
}
