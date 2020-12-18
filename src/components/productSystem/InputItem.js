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
  setProductPictureUrl,
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
          placeholder={isNumber && '請輸入正整數'}
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
          setPictureUrl={setProductPictureUrl}
        />
      )}

      {hasValue === false && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </QuestionBox>
  );
};
