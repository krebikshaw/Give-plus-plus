import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';
import { InputComponent, TextAreaComponent } from '../../components/Input';
import { RadioBox } from './RadioBox';
import { SelectBox } from './SelectBox';
import { PictureBox } from './PictureBox';

const QuestionBox = styled.div`
  margin-bottom: 40px;
`;

const QuestionTitle = styled.div`
  margin-bottom: 10px;
  color: ${COLOR.text_2};
  font-size: ${FONT.md};
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  color: ${COLOR.text_alert};
  position: absolute;
`;

export const InputItem = ({
  title,
  type,
  isNumber,
  errorMessage,
  hasValue,
  handleChange,
  options,
  productPictureUrl,
  textareaRows,
  value,
}) => {
  return (
    <QuestionBox>
      <QuestionTitle>{title}</QuestionTitle>

      {type === 'input' && (
        <InputComponent
          value={value}
          $margin={0}
          $size={title === '商品名稱' && 'lg'}
          placeholder={
            (title === '價格' && '價格需小於 NTD 50,000 元') ||
            (title === '數量' && '數量需小於 1,000 個且不可為零') ||
            (title === '備貨天數' && '備貨天數最長不能超過 30 天') ||
            null
          }
          onChange={handleChange}
        />
      )}

      {type === 'textArea' && (
        <TextAreaComponent
          $margin={0}
          $size={'lg'}
          rows={textareaRows}
          onChange={handleChange}
          value={value}
        ></TextAreaComponent>
      )}

      {type === 'radio' && (
        <RadioBox
          title={title}
          options={options}
          handleChange={handleChange}
          oldValue={value}
        />
      )}

      {type === 'select' && (
        <SelectBox
          options={options}
          handleChange={handleChange}
          oldValue={value}
        />
      )}

      {type === 'picture' && (
        <PictureBox
          pictureUrl={productPictureUrl}
          handleChange={handleChange}
        />
      )}

      {hasValue === false && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </QuestionBox>
  );
};
