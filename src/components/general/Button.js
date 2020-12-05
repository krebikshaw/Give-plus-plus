import styled from 'styled-components';

const ButtonContainer = styled.div`
  height: 2rem;
  width: ${(props) => props.$width}rem;
  margin-left: 12px;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
  line-height: 2rem;
  background-color: transparent;
  border-radius: 4px;
  border: solid 1px #a1a4a7;
  color: #414f57 !important;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  &:hover {
    border-color: #5c77b7;
    color: #5c77b7 !important;
    transform: scale(1.05);
  }
`;

export default function Button({ text, width }) {
  return <ButtonContainer $width={width}>{text}</ButtonContainer>;
}
