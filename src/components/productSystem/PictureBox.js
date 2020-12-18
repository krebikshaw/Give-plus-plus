import { useState } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE, EFFECT } from '../../constants/style';

const SetPictureContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PreviewPicture = styled.img`
  box-shadow: ${EFFECT.shadowInput};
  height: 250px;
  width: 250px;
  min-width: 250px;
  border-radius: 15px;
  object-fit: cover;
`;

const RightSide = styled.div`
  padding: ${DISTANCE.md};
  min-width: max-content;
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
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const InputFile = styled.input`
  display: none;
`;

export function PictureBox({ pictureUrl, setPictureUrl }) {
  const handleChangeFile = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID 4610c48a0c55b2a',
      },
      body: formData,
    })
      .then((data) => data.json())
      .then((data) => setPictureUrl(data.data.link));
  };

  return (
    <SetPictureContainer>
      <PreviewPicture src={pictureUrl} alt="圖片載入失敗" />
      <RightSide>
        <Description>
          從電腦中選取圖檔
          <br></br>
          最佳大小為 600px x 600px
        </Description>
        <Label>
          <InputFile type="file" onChange={handleChangeFile} />
          選擇圖片
        </Label>
      </RightSide>
    </SetPictureContainer>
  );
}
