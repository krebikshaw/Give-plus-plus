import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const AlertFooterWrapper = styled.div`
  text-align: center;
  line-height: 30px;
  height: 30px;
  background: ${COLOR.bg_mask};
  color: ${COLOR.text_2};
  font-weight: 600;
`;

const AlertFooter = () => {
  return (
    <AlertFooterWrapper>本站為練習用專案，非真實二手交易平台，請勿使用真實的資料註冊及登入，感謝 🧡</AlertFooterWrapper>
  )
}

export default AlertFooter;
