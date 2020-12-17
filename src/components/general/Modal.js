import styled from 'styled-components';
import { NormalButton } from '../Button';

const Overlay = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Content = styled.div`
  margin: 15% auto;
  background-color: white;
  border-radius: 0.25rem;
  width: 50vw;
  padding: 2rem;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Modal({ closeModal, children, closeModalMessage }) {
  return (
    <Overlay>
      <Content>
        {children}
        <ButtonWrapper>
          <NormalButton onClick={closeModal}>{closeModalMessage}</NormalButton>
        </ButtonWrapper>
      </Content>
    </Overlay>
  );
}
